import React from 'react';
import styled from 'styled-components';
import { useAppContext } from "../../contexts";

const Container = styled.div`
    border-bottom: 1px solid #dddddd !important;
    text-transform: capitalize;
`;
    
    const Content = styled.div`
    display: flex;

    .box1 {
        width: 75%;
        padding: 50px 20px;
    }

    .box2 {
        width: 25%;
        border-left: 1px solid #dddddd;
        padding: 50px 20px;
        position: relative;
    }

    .name {
        font-weight: bold;
        font-size: 1.2rem;
        color: #425466;
        text-decoration: underline;
    }

    .location {
        font-size: 1rem;
        color: #425466;
    }

    .account {
        font-size: 1rem;
        color: #00ADB5;
    }

    .status {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #425466;
        font-size: 1.1rem;
    }
`

const Button = styled.button`
    border: 1px solid ${ props => props.color}!important;
    color: ${ props => props.color}!important;
    font-weight: bold!important;
    font-size: 1rem !important;
    padding: 5px 10px !important;  
    border-radius: 12px !important;
    text-align: center !important;
    width: 100% !important;
    margin-top: 10px !important;
} 
`
  

export const Card = ({patient}: any) => {
    const { patientId, sex, account, location, status } = patient;
    const { setStatus } = useAppContext();

    const handleStatus = (status: "inactive" | "randomized") => {
        setStatus( patientId, status)    
    }

    const addStatus = () => (
        <div>
            <Button 
                color="#00ADB5"
                onClick={() => handleStatus("randomized")}
            >
                Randomized
            </Button>
            <Button 
                color="#425466"
                onClick={() => handleStatus("inactive")} 
            >
                Inactive
            </Button>
        </div>
    )
    
    return (
        <Container>
            <Content>
                <div className="box1">
                    <div className="name">
                        { patientId } - { account.firstName } { account.lastName }
                    </div>
                    <div className="location">
                        { sex ? sex + "," : null } {location.city}, {location.state}, 
                    </div>
                    <div className="account">
                        { account.phone }, { account.email.replace("+", "") }
                    </div>
                </div>
                <div className="box2">
                    <div className="status">
                        { status || addStatus()}
                    </div>
                </div>
            </Content>
        </Container>
)};
