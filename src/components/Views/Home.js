import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
        <Bg>
            <img src="img/newbg.jpg" alt="background" />
        </Bg>
        <Content>
            <Head>Welcome to Pro-Velley</Head>
            <Info>As we are the world leading platform to hire Proffessional Developers of different stacks that can help you build your dream projects faster, better and smoother from start to deploy</Info>
        </Content>
        <Link to={'/view'}><Button>Hire A Dev</Button></Link>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
`;
const Bg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.9;
    width: 100%;

    img{
        width: 100%;
        height: calc(100vh - 80px);
        object-fit: cover;
    }
`;
const Content = styled.div`
    margin-top: 140px;
    text-align: center;
`;
const Head = styled.div`
    font-size: 3rem;
    font-weight: 500;

`;
const Info = styled.div`
    font-size: 1.2rem;
    width: 700px;
    margin-top: 15px;
`;
const Button = styled.button`
    margin-top: 20px;
    width: 150px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #4EA1FF;
    color: #fff;
    transition: all 400ms;
     :hover{
         cursor: pointer;
         background-color: transparent;
         color: #fff;
         border: solid 3px #4EA1FF;
     }
`;