export const ADD_TODO = "ADD_TODO";


export const action_creator_ADD_TODO = (todoItem) => {
    console.log("action_creator_ADD_TODO - todoItem: ");
    console.log(todoItem);

    return {
        type: ADD_TODO,
        todoItem: todoItem
    };
};

export const UPDATE_TODO = "UPDATE_TODO";

export const action_creator_UPDATE_TODO = (todoItem, todoItemIndex) => {
    console.log("action_creator_UPDATE_TODO - todoItem: ");
    console.log(todoItem);

    return {
        type: UPDATE_TODO,
        todoItem: todoItem,
        todoItemIndex: todoItemIndex
    };
};
