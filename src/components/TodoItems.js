import React, { Component } from 'react'
import { Grid, Pager, PageItem, Row, Col } from 'react-bootstrap'

const TodoItems = (props) => {
    
    const mapFunc = (todoItemAsObject, todoItemIndex) => { 
        return (
            <Row>
                <Col xs={4} align="Left">
                    <a onClick={ ()=>{props.onTodoItemClick(todoItemIndex)} }>{todoItemAsObject.title}</a>
                </Col>
                <Col xs={4} align="Left">
                    {todoItemAsObject.status}
                </Col>             
            </Row>
        );
    };

    console.log("TodoItems - props.todoItems");
    console.log(props.todoItems);

    const todoItemsMarkup = props.todoItems.map(mapFunc);

    const markupToReturn = (
        <Grid>
            { todoItemsMarkup }
        </Grid>
    );
        
    return markupToReturn;
};

export default TodoItems;