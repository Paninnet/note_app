import React, { useContext } from 'react'
import { alertContext } from '../context/alertContext'

export const Alert = () => {

   const alert = useContext(alertContext)
   console.log(alert);
   if (!alert.state.visible) {
      return null
   }
   return (
      <div class={`alert alert-${alert.state.type || 'warning'} alert-dismissible`}>
         <div><strong>Holy guacamole!</strong> {alert.state.type==='success' ? "Note was added" : "Pull the note"}</div>
         <button onClick={alert.hide} type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   )
}