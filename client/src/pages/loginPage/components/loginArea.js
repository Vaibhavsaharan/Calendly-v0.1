import React, {useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getUser} from '../../../redux/actions/userActions';
import { Row, Col, Div , Text, Input, Button} from 'atomize';
import { useHistory } from "react-router-dom";


function LoginArea() {
    const [inputEmail, setInputEmail] = useState("");
    const history = useHistory();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    if(user.email === inputEmail){
        navigateToHome()
    }
    const onChangeInputEmail = e =>{
        const email = e.target.value;
        setInputEmail(email);
    };

    function onClickLogIn(){
        setInputEmail(inputEmail);
        dispatch(getUser(inputEmail));
    }


    function navigateToHome(){
        console.log('Authenticated')
        history.push("/home");
    }

    return (
        <Div shadow="5" bg="gray300" p={{md:"6rem"}}>
            <Col>
                <Row justify="center">
                    <Text tag = "h1" textSize = "display1" m={{b : "2rem"}} >Login</Text>
                </Row>
                <Row>
                    <Input
                        placeholder="Enter your email" h ="3rem" w="22rem" value={inputEmail} onChange={onChangeInputEmail} rounded="circle" suffix={
                            <Button
                            pos="absolute"
                            h = '3rem'
                            onClick={onClickLogIn}
                            top="0"
                            right="0"
                            rounded={{ r: "circle" }}
                            >
                            Log In
                            </Button>
                        }
                    />
                </Row>
            </Col>
        </Div>
    );
}

export default LoginArea;