import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialContact = styled(Link)`
  color: #fff;
  // background-color: #e31837;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  // font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-evenly;
  width: 240px;
  // margin-bottom: 16px;
  // font-weight: bold;
`;

export const SocialContactInfo = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 7px;
  margin-bottom: 8px;
`;

export const SocialContactIcon = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export const SocialContactText = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;


export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;