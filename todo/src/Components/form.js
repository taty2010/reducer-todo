import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers'


const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newListTitle, setNewListTitle] = useState('');

    const handleListEdit = e => {
        dispatch({type: 'TOGGLE_LISTEDIT'})
      };
    
      const handleListChanges = e => {
        setNewListTitle(e.target.value);
      };
    
      const handleListUpdate = e => {
        dispatch({type:'UPDATE_LIST_TITLE', payload:newListTitle})
      }

    return(
        <div>
            {!state.completed ?(
            <h2>
                {state.item} <i className="far fa-edit" onClick={handleListEdit}/>
            </h2>
            ) : (
            <div>
            <input
                className='list_input'
                type='text'
                name='newListTitle'
                placeholder={state.item}
                value={newListTitle}
                onChange={handleListChanges}
            />
            <button onClick={handleListUpdate}>Update List</button>
            </div>
            )}
        </div>
    )
}

export default Form