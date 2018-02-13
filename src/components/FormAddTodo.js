import React from 'react';
import { Modal, ModalBody, Button, FormControl, Form, FormGroup, ControlLabel, Col } from 'react-bootstrap';
import * as constants from '../constants';


export const FormAddTodo = (props) => {
    console.log("FormAddTodo render this.props:");
    console.log(props);

    const reactMarkup = (
        <Modal show={props.showForm}>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type = "text" 
                                placeholder = "Enter ToDo title"
                                value = {props.item}
                                onChange = {props.titleOnChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick = {props.saveOnClick}>Save</Button>
                            <Button onClick = {props.closeOnClick}>Close</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
        </Modal>
    );
    
    return reactMarkup;
};



