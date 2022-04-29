import * as actions from './actiontypes';
 
 export default function reducer(state = [], action){
    if (action.type === actions.FETCH)
    return [
        ...state, {
            arrays: action.payload.array,
        }
    ];
}