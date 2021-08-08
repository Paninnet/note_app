import React, { useContext, useState } from 'react'
import { alertContext } from '../context/alertContext'

export const Form = () => {

   const { show, state } = useContext(alertContext)
   const [value, setValue] = useState('')

   const formHandler = e => {
      e.preventDefault()
      if (value.trim()) {
         show(value, 'success')
         setValue('')
      }
      else{
         show(value,"warning")
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