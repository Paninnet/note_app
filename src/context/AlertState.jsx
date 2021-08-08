import { useReducer } from "react"
import { alertContext } from "./alertContext"
import { alertReducer, HIDE_ALERT, SHOW_ALERT } from "./alertReducer"

export const AlertState = ({children}) =>{

   const [state,dispatch] = useReducer(alertReducer,{visible:false})

   const hide = () =>{
      dispatch({type:HIDE_ALERT})
   }

   debugger
   const show = (text, type = 'success' ) =>{ 
      dispatch({type:SHOW_ALERT,state:{text,type}})
   }
   return(
      <alertContext.Provider value={{
        hide,show,state
      }}>
         {children}
      </alertContext.Provider>
   )
}