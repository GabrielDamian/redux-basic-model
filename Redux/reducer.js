import * as actions from "./actions";

let lastId = 0;

function reducer(state = [{ceva:"ceva"}], action)
{
    switch(action.type)
    {
        case actions.BUG_ADDED:
            return[...state,{
                id: ++lastId,
                description: action.payload.desc,
                resolved: false
            }]
        case actions.BUG_REMOVED:
            let temp_state =[];
            state.map(el=>{
                if(el.id != action.payload.id)
                {
                    temp_state.push(el);
                }
            }) //or use a filter function
            return temp_state;

        default:
            return state;
    }
}
export default reducer;
