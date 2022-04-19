import React from 'react'
import styled from 'styled-components'
import {FaUserAlt}  from 'react-icons/fa'
import {MdVerified}  from 'react-icons/md'

export default function View() {
  return (
    <>
    <Wall>
        <Container>
            <Wrapper>
                <Icon>
                    <FaUserAlt size={'2.8rem'}/>
                    <Very>
                        <MdVerified size={'1.7rem'}/>
                        <span>Verified</span>
                    </Very>
                </Icon>
                <Info>
                    <Name>Name: Lulu</Name>
                    <Proffesion> Proffession: Footballer</Proffesion>
                    <Company>Company: Microsoft</Company>
                    <Course>Course: Agric</Course>
                </Info>
            </Wrapper>
        </Container>
    </Wall>    
    </>
  )
}


const Wall = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Very = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    span{
        font-size: 0.8rem;
        margin-top: 5px;
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    width: 400px;
`;
const Info = styled.div`
    line-height: 2rem;
`;
const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    margin: 20px;
`;


const Company = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
`;
const Course = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
`;
const Proffesion = styled.div`
    font-size: 1.3rem;
    font-weight: 400;
`;
const Name = styled.div`
    font-size: 1.7rem;
    font-weight: 600;
`;