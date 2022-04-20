import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {FaUserAlt}  from 'react-icons/fa'
import {MdVerified}  from 'react-icons/md'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../Firestore/Firestore'

export default function View() {

    const [wheelData, setWheelData] = useState([])

    const getData = async ()=>{
        const data = await getDocs(collection(database, "set05"))
        setWheelData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    useEffect(() =>{
        getData()
    }, [wheelData])

  return (
    <>
    <Wall>
        {wheelData?.map((props) =>{
            return(
                <Container>
                    <Wrapper>
                        <Icon>
                            <FaUserAlt size={'2.8rem'}/>
                            <Very>
                                <MdVerified size={'1.7rem'}/>
                                <span>Verified</span>
                            </Very>
                        </Icon>
                        <Info key={props.id}>
                            <Name>Name: {props.name}</Name>
                            <Proffesion> Proffession: {props.proffesion}</Proffesion>
                            <Company>Company: {props.company}</Company>
                            <Course>Course: {props.course}</Course>
                        </Info>
                    </Wrapper>
                </Container>
            )
        })}
    </Wall>    
    </>
  )
}


const Wall = styled.div`
    width: 80%;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 5px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
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
    width: 430px;
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
    width: 100%;
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
    font-size: 1.6rem;
    font-weight: 500;
`;