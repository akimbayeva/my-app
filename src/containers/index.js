import App from '../components/App';
import {connect} from 'react-redux';
import {action_creator_ADD_TODO, ADD_TODO, action_creator_UPDATE_TODO, UPDATE_TODO} from '../actions';

const mapStateToProps = (state) => {
    const propsToPassFromReduxToReact = {
        todoItems: state.todoItems,
        prop2: "hi there!"
    };
    return propsToPassFromReduxToReact;
}




const mapDispatchToProps = (dispatch) => {

    const handlersToPassFromReduxToReact = {

        buttonOnClick: (newTodoText) => {
            console.log("mapDispatchToProps.buttonOnClick from container was clicked!");
            dispatch(action_creator_ADD_TODO(newTodoText));
        },

        saveTodo: (todoItem, todoItemIndex) => {
            console.log("mapDispatchToProps.saveTodo from container was clicked!");
            console.log("todoItem:");
            console.log(todoItem);

            console.log("todoItemIndex:");
            console.log(todoItemIndex);

            console.log("dispatch:");
            console.log(dispatch);

            let pojo_Action;
            if (todoItemIndex >= 0) {
                // Update existing todo item
                pojo_Action = {
                    type: UPDATE_TODO,
                    todoItem: todoItem,
                    todoItemIndex: todoItemIndex
                };
            } else {
                // Add new todo item
                pojo_Action = {
                    type: ADD_TODO,
                    todoItem: todoItem
                };
            };
            dispatch(pojo_Action);
        }

    };
    return handlersToPassFromReduxToReact;
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;


