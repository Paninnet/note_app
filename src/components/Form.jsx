import React, { useContext, useState } from 'react'
import { alertContext } from '../context/alert/alertContext'
import { firebaseContext } from '../context/firebase/firebaseContext'
import { firebaseReducer } from '../context/firebase/firebaseReducer'

export const Form = () => {

   const { show, state } = useContext(alertContext)
   const [value, setValue] = useState('')
   const { add } = useContext(firebaseContext)

   const formHandler = e => {
      e.preventDefault()
      if (value.trim()) {
         add(value.trim()).then(() => {
            show('Note was added', 'success')
         }).catch(() => {
            show('Oppps', 'danger')
         })
         setValue('')

      }
      else {
         show("Pull the note", "warning")
         setValue('')
      }
   }
   return (
      <form onSubmit={formHandler}>
         <div className='form-group'>
            <input onChange={e => setValue(e.target.value)} value={value} type='text' className='form-control' placeholder="Pull the note"></input>
         </div>
      </form>
   )
}