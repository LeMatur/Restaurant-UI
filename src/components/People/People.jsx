import React from 'react'
import { PeopleContainer, PeopleData, PeopleDesc, PeopleHeading, PeopleImg, PeopleWrapper } from './style';
import People1 from '../../images/people1.jpg';
import People2 from '../../images/people3.jpg';
import styled from 'styled-components';

const People = () => {
    return (
        <PeopleContainer>
            <PeopleHeading>WELCOME</PeopleHeading>
            <PeopleWrapper>
                <PeopleData>
                    <PeopleImg src={People1} />
                    <PeopleDesc>Because we believe in your trust in us, 
                        we made sure to assemble the best team possible to provide you with high quality services and products.</PeopleDesc>
                </PeopleData>
                <PeopleData>
                    <PeopleDesc>Kids are important and welcome too. We have specifics activities and menus to ensure that your kids can have as much fun as possible.</PeopleDesc>
                    <PeopleImg src={People2} />
                </PeopleData>
            </PeopleWrapper>
        </PeopleContainer>
    )
}

export default People;
