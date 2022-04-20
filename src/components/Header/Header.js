import React from 'react'
import {RiDatabaseLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function QouteHeader() {
  return (
    <>
        <Container>
            <Wrapper>
                <RiDatabaseLine size={'3rem'}/>
                <Link to={'/'}><span>Pro-Velley</span></Link>
            </Wrapper>
        </Container>
    </>
  )
}

const Container = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4EA1FF;
    width: 100%;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: center;

    span{
        font-size: 2rem;
        font-family: 'Lobster';
        margin-left: 10px;
    }
`;