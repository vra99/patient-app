import React, { useState } from 'react'
import styled from 'styled-components';

interface TabsProps {
    children:  JSX.Element[];
};

const Container = styled.div`
  .tabs {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dddddd !important;
  }

  .box-container {
    border-bottom: 1px solid #dddddd !important;
    width: 100%;
    display: flex;
  }
  
  .box-1{
    width: 75%;
    padding: 20px;
    font-weight: bold;
  }

  .box-2{
    width: 25%;
    border-left: 1px solid #dddddd;
    padding: 20px;
    position: relative;
  }
`
const Button = styled.button`
  color: ${ props => props.color}!important;
  font-size: 1.15rem !important;
  margin-right: 14px !important;
`

const CardContainer = styled.div`
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  margin: 50px 0px;
  background: white;
 `

export const Tabs= React.memo((props: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const activeTab = props.children[activeTabIndex];
  return (
    <Container>
      <div className="tabs">
        {props.children.map((tab: JSX.Element, i: number) => (
          <Button
            onClick={() => {
              setActiveTabIndex(i);
            }}
            key={i}
            color={i === activeTabIndex ? '#00ADB5' : '#697386'}
            style={{
              borderBottom: i === activeTabIndex ? '2px solid #00ADB5' : '',
            }}
          >
            {tab.props.title}
          </Button>
        ))}
      </div>
      <div className="tab-indicator-container">
        <div
          className="tab-indicator"
          style={{
            width: 100 / props.children.length + "%",
            transform: `translateX(${activeTabIndex * 100}%)`
          }}
        />
      </div>
      <CardContainer>
        <div className="box-container">
          <div className="box-1">
            Active Clients 
          </div>
          <div className="box-2"/> 
        </div>
        {activeTab?.props.children}
      </CardContainer>
    </Container>
  );
});
