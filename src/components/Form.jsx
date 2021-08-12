import React, { useContext, useState } from 'react'
// import { alertContext } from '../context/alertContext';
import { alertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {

   const { show, state } = useContext(alertContext)
   const { addNotes, fetchNotes } = useContext(FirebaseContext)
   const [value, setValue] = useState('')

   const formHandler = e => {
      e.preventDefault()
      if (value.trim()) {
         addNotes(value.trim()).then(() => {
            show('Note was added', 'success')
         }).catch(()=>{
            show("Ooops smt wrong", 'danger')
         })
         setValue('')
      }
      else {
         show('Pull the note', "warning")
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