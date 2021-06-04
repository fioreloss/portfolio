import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import "./timeline.css"
export default function Portfolio() {
    return (
        <div id="timeline">
            <Timeline lineColor={'#ddd'} >
  <TimelineItem 
    key="001"
    dateText="1/2021 – Present"
    dateInnerStyle={{ background: 'e86971'}}
    bodyContainerStyle={{
      width:'50%',
      background: '#ddd',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: 'black',fontSize:'25px' }}>React Developer</h3>
    <h4 style={{ color: '#61b8ff',fontSize:'15px' }}>Digital Group</h4>
    <p style={{ontSize:'12px' }}>
      Created diferent web Applications(ecomercce, in company platforms merged with SalesForce).
      </p>
  </TimelineItem>
  <TimelineItem classname="container"
    key="002"
    dateText="09/2020 – 1/2021"
    dateInnerStyle={{ background: 'e86971'}}
    bodyContainerStyle={{
      width:'50%',
      background: '#ddd',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: 'black',fontSize:'25px'}}>SalesForce Developer</h3>
    <h4 style={{ color: '#61b8ff',fontSize:'15px' }}>Digital Group</h4>
    <p style={{fontSize:'13px' }}>
      Created diferent Apps for companies using custom and standard tables and pages in SalesForce.
      Main focus on custom Triggers and Apex classes.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="11/2019 – 09/2021"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      width:'50%',
      background: '#ddd',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{fontSize:'25px', color:'black'}}>Msc Software Engineering</h3>
    <h4 style={{fontSize:'15px', color:'#61b8ff'}}> Canadian Institute of Technology</h4>
    <p style={{fontSize:'13px'}}>
    Graduated from Canadian Instituteof Technology with  Masters of Science  in Software Engineering.
    </p>
    
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="10/2013-10/2019"
    dateInnerStyle={{ background: '#61b8ff', color: '#000'}}
    bodyContainerStyle={{
      width:'50%',
      background: '#ddd',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{fontSize:'23px', color:'black'}}>Bachelors in Mathematics and Informatics Engineering</h3>
    <h4 style={{fontSize:'15px', color:'#61b8ff'}}>University of Tirana</h4>
    <p style={{fontSize:'13px'}}>
     Graduated from Univeristy of Tirana with a Bachelors Degree in Mathematics and Informatics Engineering
    </p>
    
  </TimelineItem>
</Timeline>
        </div>
    )
}
