import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js'

export default(state=[],action) => {
    switch(action.type) {
        case ADD_TODO:{
            return [
                {
                completed: false,
                id: action.id,
                text: action.text   
                },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if(todoItem.id === action.id) {
                    return {...todoItem,completed: !todoItem.completed}
                }else {
                    return todoItem
                }
            }) 
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return   
            })
        }
        default:{
            return state
        } 
    }
}