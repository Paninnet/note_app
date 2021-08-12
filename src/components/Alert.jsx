import React, { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { alertContext } from '../context/alert/alertContext'


export const Alert = () => {

   const alert = useContext(alertContext)
   // if (!alert.state.visible) {
   //    return null
   // }
   return (
      <CSSTransition in={alert.state.visible} timeout={{enter:500,exit:350}} classNames={'allert'} mountOnEnter unmountOnExit>
         <div class={`alert alert-${alert.state.type || 'warning'} alert-dismissible`}>
            <div><strong>Holy guacamole!</strong> {alert.state.text}</div>
            <button onClick={alert.hide} type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
         </div>
      </CSSTransition>
   )
}