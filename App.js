import React, {useEffect, useState} from 'react';
import store from './Redux/store';
import * as actions from './Redux/actions';
import {bugAdded} from './Redux/actionsCreators';


function App()
{
  useEffect(()=>{
    console.log(store.getState());
    //dispatch the object directly wihtout a actionCreator
    store.dispatch({
      type: actions.BUG_ADDED,
      payload:{
        desc: "damian"
      }
    })
    console.log(store.getState())
  },[])

  useEffect(()=>{
    const unsubscribeAfter = store.subscribe(()=>{
      console.log("Store state changed!");
    })
    //the best way
    store.dispatch(bugAdded("ceva Descriere"));
    
    console.log(store.getState())
    unsubscribeAfter();
  },[])
  
  return(
    <>
    <p>Parent:</p>
    </>
  )
}

export default App;
