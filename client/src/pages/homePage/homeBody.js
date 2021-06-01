import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Div ,Text, Button, Icon} from 'atomize';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {getAllEvents} from '../../redux/actions/eventsAction';
import BookingBody from '../bookingPage/bookingBody';
import Moment from 'react-moment';

function HomeBody() {
  const events = useSelector(state => state.events);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() =>{
    console.log('fetchin', user._id)
    dispatch(getAllEvents(user._id))
    console.log(events)
  },[])
    return (
      <Router>
        <Div d="flex" h="100vh" w="100vw" flexDir="column" > 
          <Row m={{md:'1rem'}}>
            <Button prefix={
              <Icon name="Timestamp" color ="White" size="16px"/>
            }  rounded="circle" p={{ r: "1rem", l: "1rem" }} shadow="3" hoverShadow="4">
            </Button>
            <Text  cursor="pointer" textSize="display1" m={{l:"0.5rem"}} >Calendly v0.1</Text>
          </Row>
          <Row justify="center" >
            <Link to="/home">
              <Button prefix={
                <Icon name="HomeSolid" color ="White" size="16px" m={{r:"1rem"}}/>
              }  rounded="circle" p={{ r: "1rem", l: "1rem" }} shadow="3" hoverShadow="4" m={{r:"1rem"}}>
                Home
              </Button>
            </Link>
            <Link to="/meetings">
              <Button prefix={
                <Icon name="Timestamp" color ="White" size="16px" m={{r:"1rem"}} />
              } rounded="circle" p={{ r: "1rem", l: "1rem" }} shadow="3" hoverShadow="4" m={{r:"1rem"}}>
                Meeting Templates
              </Button>
            </Link>
            <Link to="/schedule_meeting">
              <Button prefix={
                <Icon name="Add" color ="White" size="16px" m={{r:"1rem"}}/>
              }  rounded="circle" p={{ r: "1rem", l: "1rem" }} shadow="3" hoverShadow="4" >
                Book Meeting
              </Button>
            </Link>
          </Row>
          <Row m={{t:"1rem"}}>
          <Switch>
            <Route exact path="/home">
              <EventList />
            </Route>
            <Route path="/meetings">
              <EventTypes />
            </Route>
            <Route path="/schedule_meeting">
              <BookingBody />
            </Route>
          </Switch>
            
          </Row>
          
        </Div>
      </Router>
  );
  function EventList(){
    return(
      <Div  m={{x:"auto"}} w="35%">
        <ul>
          {events &&
            events.map((event, index) => (
              <Row
                onClick={() => {}}
                key={index}
                bg="white"
                m={{md:"2rem"}}
                shadow="3"
                align="center"
                rounded="circle"
                cursor="pointer"
              >
                <ShowTime startTime = {event.start_time}/>
                <Col  >
                  <Text textAlign="left" textSize="title">{event.name}</Text>
                </Col>
              </Row>
            ))}
        </ul>
      </Div>
    )
  }
  function ShowTime(props){
    var date = new Date(props.startTime);
    return(
      <Col>
        <Moment format="DD MMM">
          {date}
        </Moment>
        <Moment format="HH:mm">
          {date}
        </Moment>
      </Col>
    )
  }
}


function EventTypes(){
  return(
    <Div></Div>
  )
}


export default HomeBody;