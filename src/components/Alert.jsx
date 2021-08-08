import React, { useContext } from 'react'
import { alertContext } from '../context/alertContext'

export const Alert = () => {

   const alert = useContext(alertContext)
   console.log(alert);
   if(!alert.state.visible){
      return null
   }
   return (
      <div class={`alert alert-${alert.state.type || 'warning'} alert-dismissible`}>
         <strong>Holy guacamole!</strong> {alert.state.text}
         <button onClick={alert.hide} type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   )
}