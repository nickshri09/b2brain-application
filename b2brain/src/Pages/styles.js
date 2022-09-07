import styled from "styled-components";
import { btnReset, v } from '../styles/variables';

export const SSearch = styled.div`
    background: white;
    border: none;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(192, 182, 182, 0.74); 
    box-shadow: 0px 0px 19px 1px rgba(192, 182, 182, 0.74);
    margin: 0;
    width: 500%;
    padding: ${v.smSpacing};
    input {
        padding: 0;
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: rgb(192,192,192);
        background: transparent;
    }
    display: flex;
`;

export const SSearchIcon = styled.div`
    ${btnReset};
    padding:  ${v.smSpacing};
    display: flex;
    cursor: pointer;
    background: white;
    color: rgb(169,169,169);

    svg{
        font-size: 30px;
    }
`;

export const HeroIMG = styled.div`
width: 500%;
img {
    max-width: 100%;
    height: auto;
}
cursor: pointer;
display: flex;
space-between:  ${v.lgSpacing};

`;

export const Companies = styled.div`
width: 500%;
img {
    max-width: 100%;
    height: auto;
}
display: flex;
`;

export const Footer = styled.div`
width: 500%;
img {
    max-width: 100%;
    height: auto;
}
cursor: pointer;
display: flex;
`;

export const SearchData = styled.div`
.search__content {
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 2.5rem;
    grid-gap: 2rem;
  }

  .search__heading {
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    color: #000000;
    opacity: 0.6;
  }

  .quick__action__content {
    padding-top: 1.2rem;
  }

  .search__page__right .text {
    font-weight: 700;
    font-size: 14px;
    padding-top: 19px;
  }
`;

export const Ul = styled.ul`
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

export const Li = styled.li`
  padding: 0.7rem 0rem;

  & > a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
    
  }

  @media (max-width: 550px) {
    & > a {
      white-space: nowrap;
      background: #f7f7f7;
      padding: 0.2rem 1rem;
      border-radius: 1rem;
      border: 2px solid #d9d9d9;
      }
    }
  }
`;

export const Heading = styled.div`

font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #000000;

  opacity: 0.5;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContainer = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
margin-left: 50px;
margin-top: 50px;
`;

export const Card = styled.div`
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
  }`;

 