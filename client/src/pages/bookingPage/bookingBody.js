import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Div, Input, Text, Button, Icon } from 'atomize';
import DateTimePicker from 'react-datetime-picker';
import {createEvent} from '../../redux/actions/eventsAction';


function BookingBody() {
  const [meetingName, setMeetingName] = useState("");
  const [meetingDate, onChangeMeetingDate] = useState(new Date());
  const [guestEmail, setguestEmail] = useState("");
  const user = useSelector(state => state.user);
  const initialEventState = {
    owner_id: user._id,
    name: "",
    status : false,
    start_time: "",
    end_time: "",
    event_guests : [],
    event_type : "60b3a6846226934aa60c00f2"
  };
  const [newEvent, setNewEvent] = useState(initialEventState);


  const dispatch = useDispatch();

  const onChangeMeetingName = e =>{
    const name = e.target.value;
    setMeetingName(name);
  };
  const onChangeGuestEmail = e =>{
    const email = e.target.value;
    setguestEmail(email);
  };
  const handleSubmit = () => {
    console.log(meetingDate, meetingName, guestEmail)
    const startTimeInMilli = new Date(meetingDate).getTime();
    const halfHour = 1000 * 60 * 30
    const endTimeInMilli = startTimeInMilli+halfHour
    const endTime = new Date(endTimeInMilli)
    setNewEvent({
      owner_id : initialEventState.owner_id,
      name : meetingName,
      status : true,
      start_time : meetingDate,
      end_time : endTime,
      event_guests : new Array(guestEmail),
      event_type : initialEventState.event_type
    })
    dispatch(createEvent(newEvent));
    console.log(newEvent);
  }
  return(
    <Div m={{t:"5rem"}} w = "100vw" align="center" d="flex" justify="center" >
      <Div bg="gray200" shadow="2" p="5rem">
        <Row m={{b:"3rem"}} justify="center">
          <Text textSize="display1">
            Book 30 Minutes Meeting
          </Text>
        </Row>
        <Row justify="center" >
          <Col justify="space-around" align="flex-end" >
            <Text m={{t:"0.3rem"}} textAlign="right" >Meeting Name</Text>
            <Text m={{y:"2rem"}} textAlign="right">Start time</Text>
            <Text textAlign="right">Guests Email</Text>
          </Col>
          <Col justify="space-around" align="flex-start">
            <Input value={meetingName} onChange={onChangeMeetingName} w="13.7rem"  placeholder="Name of Meeting" />
            <Div m={{y:"1.2rem"}}>
              <DateTimePicker
                onChange={onChangeMeetingDate}
                value={meetingDate}
              />
            </Div>
            <Input value={guestEmail} onChange={onChangeGuestEmail} w="13.7rem"  placeholder="Enter Guest's Email" />
          </Col>
        </Row>
        <Row m={{t:"2rem"}} justify="center">
          <Button
            suffix={
              <Icon
                name="LongRight"
                size="16px"
                color="white"
                m={{ l: "1rem" }}
              />
            }
            shadow="3"
            hoverShadow="4"
            m={{ r: "1rem" }}
            onClick={handleSubmit}
          >
            Book Meeting
          </Button>
        </Row>
      </Div>
    </Div>
  )
}

export default BookingBody;