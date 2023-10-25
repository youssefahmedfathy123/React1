import { createContext, useReducer} from "react"
import {A} from './Text'
const InitialState = {jok : A}

export const Boss = createContext(InitialState)

const BigPatcher = (state,action) => {
    switch(action.type){
      case 'DeleteAll' : return {...state,jok : []}
      case 'Restore' : return {...state,jok : InitialState.jok}
      case 'remove' : return{...state,jok : state.jok.filter(x => x.id !== action.payload)}
      default : return state
    }  }
    


export const Puplic =({children}) =>{
 const ok = () => {
    patcher({
        type : 'DeleteAll'
})
} 
const ok2 = () => {
    patcher({
        type : 'Restore'
})
} 
const remove = (i) => {
  patcher({
      type : 'remove',
      payload : i
})
} 

const [state,patcher] = useReducer(BigPatcher,InitialState)
  return (
    <>    
    <Boss.Provider value={{
       joky : state.jok,
       ok,ok2,remove,
        init : InitialState.jok
    }}>
     {children}
    </Boss.Provider>
    </>
  )
}


