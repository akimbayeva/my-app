import { ADD_TODO, UPDATE_TODO } from '../actions';

const initialState = {
    todoItems: []
};

function rootReducer(prevState = initialState, action){
    let newState;
    let newTodoItems;

    switch (action.type) {

        case ADD_TODO:
            console.log("rootReducer - case ADD_TODO");
            console.log("action.todoItem:");
            console.log(action.todoItem);
            newTodoItems = prevState.todoItems.concat(action.todoItem);
            newState = {
                todoItems: newTodoItems
            };
            return newState;
            break;

        case UPDATE_TODO:
            console.log("rootReducer - case UPDATE_TODO");
            console.log("action.todoItem:");
            console.log(action.todoItem);
            console.log("action.todoItemIndex:");
            console.log(action.todoItemIndex);

            const mapFunc = (sourceArrayItem, index) => {
                if (index === action.todoItemIndex) {
                    return action.todoItem;
                } else {
                    return sourceArrayItem;
                }
            };

            newTodoItems = prevState.todoItems.map(mapFunc);
            newState = {
                todoItems: newTodoItems
            };
            return newState;
            break;

            
        default:
            return prevState;
    }


    
};

export default rootReducer;