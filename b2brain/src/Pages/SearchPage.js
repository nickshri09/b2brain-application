import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { compLogo } from '../assets';


const SearchPage = ({ searchTerm }) => {
  const [reqData, setReqData] = useState([]);
  const [trackState, setTrackState] = useState("Track");


  const keys = ["company", "website", "slug"];

  const searchFilter = (reqData) => {
    return reqData.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchTerm))
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/?q=${searchTerm}`);
        setReqData(searchFilter(response.data));
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [searchTerm]);


  const doTrack = (e) => {
    trackState === "Tracking" ? setTrackState("Track") : setTrackState("Tracking");
    e.currentTarget.classList.toggle("active");
  }

  return (
    <Container>
      <div>
        <div style={{ flex: "2" }}>
          <Heading>Similar Accounts</Heading>
          <CardContainer>
            {reqData.map((company, index) => (
              <Card key={index}>
                <div>
                  {company.logo ? (
                    <Img src={company.logo} alt="" />
                  ) : (
                    <Img src={compLogo} />
                  )}
                </div>
                <div>
                  <div>
                    <div className='comp_name'>{company.company}</div>
                    <div className='comp_website'>{company.website}</div>
                  </div>

                  <button className="track_class" onClick={doTrack} id="track_id">
                    {trackState}
                  </button>

                </div>
              </Card>
            ))}
          </CardContainer>
        </div>
        <div style={{ flex: "1" }}>
          <Heading>Quick Action</Heading>
          <Ul>
            <Li>
              <a href="/">Track new Account</a>
            </Li>
            <Li>
              <a href="/">Bulk Track accounts</a>
            </Li>
            <Li>
              <a href="/">Manage Accounts</a>
            </Li>
          </Ul>
        </div>
      </div>
    </Container>
  )
}

export default SearchPage;

const Container = styled.div`
  padding: 2rem 3rem;

  & > div {
    display: flex;
    flex-flow: row nowrap;
    gap: 4rem;
  }
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #000000;

  opacity: 0.5;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  min-width: 300px;

  & > div:nth-of-type(2) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 1rem;
  }
  .comp_name {
    font-weight: 600;
  }
  .comp_website{
    font-size: 12px;
    color: rgb(192,192,192);
  }
  .track_class{
    width: 53px;
    height: 30px;
    border: 1px solid #ff6059;
    border-radius: 2px;
    text-align: center;
    color: #ff6059;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0em;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;

  @media (max-width: 500px) {
    display: inline-flex;
    gap: 1rem;
  }
`;

const Li = styled.li`
  padding: 0.7rem 0rem;

  & > a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    
  }
  }
`;
