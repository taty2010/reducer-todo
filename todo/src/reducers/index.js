export const initialState = {
    item: 'learn about reducers',
    completed: false,
    id: 3892987589
};

export const reducer = (state, action) => {
    switch(action.type) {
        case'TOGGLE_LISTEDIT':
        return{
            ...state,
            completed: !state.completed
        };
        case'UPDATE_LIST_TITLE':
        return{
            ...state,
            item: action.payload,
            completed: false
        }
        default: return state
    }
}