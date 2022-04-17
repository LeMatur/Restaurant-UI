import styled from 'styled-components';

export const PeopleContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const PeopleHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
//   flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
`;

export const PeopleData = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PeopleImg = styled.img`
    height: 280px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`;

export const PeopleDesc = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 50%;
    font-size: 24px;
`;