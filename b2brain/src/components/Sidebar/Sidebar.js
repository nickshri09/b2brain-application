import React, { useState } from 'react'
import { SLogo, SSidebar, SLinkContainer, SLinkIcon, SLink, SLinkNotification, SLinkLabel, SDropDownMenu } from './styles';
import { logoSvg } from '../../assets';
import * as ai from 'react-icons/ai';
import * as bs from 'react-icons/bs';
import { FaRegBuilding } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TiMessages } from 'react-icons/ti';

const Sidebar = () => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);


  return (<SSidebar>
    <SLogo>
      <img alt='logo' src={logoSvg} /><h1>B2Brain</h1>
    </SLogo>

    {linksArray.map(({ icon, label, notification, to, subNav }) => (
      <SLinkContainer key={label} onClick={label.subNav && showSubnav}>
        <SLink to={to}>
          <SLinkIcon>{icon}</SLinkIcon>
          <SLinkLabel>{label}</SLinkLabel>
          {!!notification &&
            <SLinkNotification>{notification}</SLinkNotification>}
          {!!subNav && <SDropDownMenu>{subNav && subnav
            ? label.iconOpened
            : label.subNav
              ? label.iconClosed
              : null}</SDropDownMenu>}
        </SLink>
        {/* <div>
          {label.subNav && subnav
            ? label.iconOpened
            : label.subNav
            ? label.iconClosed
            : null}
        </div> */}
      </SLinkContainer>

    ))}

  </SSidebar>
  );
};

const linksArray = [
  {
    label: <h3>Dashboard</h3>,
    icon: <ai.AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Intels",
    icon: <ai.AiOutlineStar />,
    to: "/intels",
    notification: '4 unread',
  },
  {
    label: "Leads",
    icon: <bs.BsPerson />,
    to: "/leads",
    notification: '4 unseen',
  },
  {
    label: "Accounts",
    icon: <FaRegBuilding />,
    to: "/accounts",
    notification: 0,
    iconClosed: <bs.BsChevronUp />,
    iconOpened: <bs.BsChevronDown />,
    subNav: [
      {
        label: 'Manage All',
        path: '/accounts/manage-all'
      },
      {
        label: 'Track new accounts',
        path: '/accounts/track-new-aacount'
      },
      {
        label: 'Bulk import',
        path: '/accounts/bulk-import'
      }
    ]
  },
  {
    label: "Preferences",
    icon: <ai.AiOutlineSetting />,
    to: "/preferences",
    notification: 0,
    iconClosed: <bs.BsChevronUp />,
    iconOpened: <bs.BsChevronDown />,
    subNav: [
      {
        label: 'Product Focus',
        path: '/preferences/product-focus'
      },
      {
        label: 'Intel Preferences',
        path: '/preferences/intel-preferences'
      },
      {
        label: 'Lead Persona',
        path: '/preferences/link-persona'
      }
    ]
  },

  {
    label: "Integrations",
    icon: <bs.BsLink45Deg />,
    to: "/integrations",
    notification: 0,
  }, {
    label: "Team",
    icon: <HiOutlineUserGroup />,
    to: "/team",
    notification: 0,
  },
  {
    label: "Help / Support",
    icon: <TiMessages />,
    to: "/help-support",
    notification: 0,
  },

]

export default Sidebar;