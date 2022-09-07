import styled from "styled-components";
import { Link } from "react-router-dom";
import { v } from '../../styles/variables';

export const SSidebar = styled.div`
    width: ${v.sidebarWidth};
    z-index: 2;
    background: ${({ theme }) => theme.bg};
    height: 100%;
    padding: ${v.smSpacing};
    position: relative;
    overflow: auto;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(192, 182, 182, 0.74); 
    box-shadow: 0px 0px 19px 1px rgba(192, 182, 182, 0.74);
    
`;


export const SLogo = styled.div`
    width: 52px;
    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};
    display: flex;
    space-between:  ${v.lgSpacing};
    h1{
        margin-left: ${v.mdSpacing};
    }
`;



export const SDivider = styled.div`
    height:1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`
export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkNotification = styled.div`
    font-size: 10px;
    padding: calc(${v.xsSpacing} / 2) ${v.xsSpacing};
    border-radius: ${v.borderRadius};
    background: ${({ theme }) => theme.notify};
    color: white;
    margin-right: ${v.smSpacing};
`;

export const SDropDownMenu = styled.div`
    font-size: 10px;
    padding: calc(${v.xsSpacing} / 2) ${v.xsSpacing};
    background: ${({ theme }) => theme.bg};
    color: white;
    margin-right: ${v.smSpacing};
`;