import React from 'react'
import { Alert } from '../components/Alert'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'

export const Main = () => {
   const note = new Array(5).fill("").map((_,i) =>{
      return({id:i,title:"Заметка"})
   })
   return (
      <div>
         <Alert/>
         <Form/>
         <Notes note={note}/>
      </div>
   )
}