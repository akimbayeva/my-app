import React from 'react';
import { Modal, ModalBody, Button, FormControl, Form, FormGroup, ControlLabel, Col, DropdownButton, MenuItem } from 'react-bootstrap';
import * as constants from '../constants';

export const FormEditTodo = (props) => {
    console.log("FormEditTodo props:");
    console.log(props);
    
    const reactMarkup = (
        <Modal show={(props.todoItemIndex >= 0)}>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={4}>
                            <FormControl 
                                type = "text" 
                                placeholder = "Enter ToDo title"
                                value = {props.todoItem && props.todoItem.title}
                                onChange = {props.titleOnChange}
                            />
                        </Col>
                        <Col componentClass={ControlLabel} sm={2}>
                            Status
                        </Col>
                        <Col sm={4}>
                            <DropdownButton title={props.todoItem && props.todoItem.status} onSelect={props.statusOnChange}>
                                {props.todoItem && (props.todoItem.status === constants.TODO_STATUS_ACTIVE ? <MenuItem active eventKey={constants.TODO_STATUS_ACTIVE}>{constants.TODO_STATUS_ACTIVE}</MenuItem> : <MenuItem eventKey={constants.TODO_STATUS_ACTIVE}>{constants.TODO_STATUS_ACTIVE}</MenuItem >)}
                                {props.todoItem && (props.todoItem.status === constants.TODO_STATUS_COMPLETED ? <MenuItem active eventKey={constants.TODO_STATUS_COMPLETED}>{constants.TODO_STATUS_COMPLETED}</MenuItem> : <MenuItem eventKey={constants.TODO_STATUS_COMPLETED}>{constants.TODO_STATUS_COMPLETED}</MenuItem>)}
                                {props.todoItem && (props.todoItem.status === constants.TODO_STATUS_POSTPONED ? <MenuItem active eventKey={constants.TODO_STATUS_POSTPONED}>{constants.TODO_STATUS_POSTPONED}</MenuItem> : <MenuItem eventKey={constants.TODO_STATUS_POSTPONED}>{constants.TODO_STATUS_POSTPONED}</MenuItem>)}
                                {props.todoItem && (props.todoItem.status === constants.TODO_STATUS_CANCELLED ? <MenuItem active eventKey={constants.TODO_STATUS_CANCELLED}>{constants.TODO_STATUS_CANCELLED}</MenuItem> : <MenuItem eventKey={constants.TODO_STATUS_CANCELLED}>{constants.TODO_STATUS_CANCELLED}</MenuItem>)}
                            </DropdownButton>
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


