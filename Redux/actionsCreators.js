import * as actions from './actions';

export function bugAdded(desc)
{
    return({
        type:actions.BUG_ADDED,
        payload:{
            desc:desc
        }
    })
}