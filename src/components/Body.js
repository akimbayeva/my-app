import React, { Component } from 'react';
import ReactDOM, { findDOMNode }  from 'react-dom';
import { Form, Button, FormControl, ListGroup, ListGroupItem, Pager, PageItem, Panel, Grid, Col, Row } from 'react-bootstrap';
import { FormAddTodo } from './FormAddTodo';
import { FormEditTodo } from './FormEditTodo';
import * as constants from '../constants';
import TodoItems from './TodoItems';



class Body extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            showFormAddTodo: false,
            editItemIndex: -1, //index of todo item opened for editing
            tempItem: null, //cloned copy of todo item being edited or empty item being added
        };
    }

    
    addTodoButtonOnClick = () => {
        console.log("addTodoButtonOnClick invoked");
        this.setState({
            showFormAddTodo: true,
            tempItem: {
                title: "",               
                status: constants.TODO_STATUS_ACTIVE
            }
        });
    }

    addForm_Close = () => {
        console.log("addForm_Close invoked");
        this.setState({
            showFormAddTodo: false,
            tempItem: null //cloned copy of todo item being edited
        }); 
    }

    addForm_Save = () => {
        console.log("addForm_Save invoked");
        this.props.saveTodo(this.state.tempItem, -1);
        this.setState({
            showFormAddTodo: false, 
            tempItem: null, //cloned copy of todo item being edited
        });         
    }
    


    onTodoItemClick = (todoItemIndex) => {
        console.log("onTodoItemClick invoked");
        
        const copyOfClickedTodoItem = {
            ...this.props.todoItems[todoItemIndex]
        };

        this.setState({
            editItemIndex: todoItemIndex, //cloned copy of todo item being edited
            tempItem: copyOfClickedTodoItem //index of todo item opened for editing
        }); 
    }


    editForm_Close = () => {
        console.log("editForm_Close invoked");
        this.setState({
            editItemIndex: -1, //cloned copy of todo item being edited
            tempItem: null //index of todo item opened for editing
        }); 
    }

    editForm_Save = () => {
        console.log("editForm_Save invoked");
        this.props.saveTodo(this.state.tempItem, this.state.editItemIndex);
        this.setState({
            editItemIndex: -1, //cloned copy of todo item being edited
            tempItem: null, //index of todo item opened for editing
            //editItemStatus: 
        });         
    }

    tempItemTitleChange = (eventData) => {
        console.log("tempItemTitleChange invoked");
        console.log("eventData.target.value:");
        console.log(eventData.target.value);

        const editItemAfterChanges = this.state.tempItem;
        editItemAfterChanges.title = eventData.target.value;
        this.setState({tempItem: editItemAfterChanges});
    }

    tempItemStatusChange = (eventKey) => {
        console.log("tempItemStatusChange invoked");
        console.log("eventKey:");
        console.log(eventKey);

        const editItemAfterChanges = this.state.tempItem;
        editItemAfterChanges.status = eventKey;
        this.setState({tempItem: editItemAfterChanges});
    }


    render() {
        console.log("this in render:");
        console.log(this);
/*
        // Define the visual representation of ONE todoItem
        const mapFunc = (todoItemAsObject, todoItemIndex) => { 
            return (
                <Row>
                    <Col xs={4} align="Left">
                        <a onClick={ () => this.onTodoItemClick(todoItemIndex) }>{todoItemAsObject.title}</a>
                    </Col>
                    <Col xs={4} align="Left">
                        {todoItemAsObject.status}
                    </Col>
                    
                </Row>
            );
        };
        const todoItemsMarkup = this.props.todoItems.map(mapFunc);

        console.log("this.state.showFormAddTodo: " + this.state.showFormAddTodo);
*/

        const markupToReturn = (
            <Panel>
                <div>
                    <Form inline>
                        <Button  onClick={this.addTodoButtonOnClick}>Add ToDo</Button>
                    </Form>
                    
                    <FormAddTodo 
                        showForm = {this.state.showFormAddTodo} 
                        todoItem = { this.state.tempItem}
                        closeOnClick = {this.addForm_Close}
                        saveOnClick = {this.addForm_Save}
                        titleOnChange = {this.tempItemTitleChange}
                    />

                     <FormEditTodo 
                        todoItem = { this.state.tempItem } 
                        todoItemIndex = { this.state.editItemIndex } 
                        closeOnClick = {this.editForm_Close}
                        saveOnClick = {this.editForm_Save}
                        titleOnChange = {this.tempItemTitleChange}
                        statusOnChange = {this.tempItemStatusChange}
                    />

                </div>

                <TodoItems 
                    onTodoItemClick = { this.onTodoItemClick}
                    todoItems = {this.props.todoItems}
                />

            </Panel>
        );

        return markupToReturn;
    }

}

export default Body;

