import React from 'react'
import { Form } from '../components/Form'
import { Notes } from '../components/Notes'

export const Main = () => {
   const note = new Array(5).fill("").map((_,i) =>{
      return({id:i,title:"Заметка"})
   })
   return (
      <div>
         <Form/>
         <Notes note={note}/>
      </div>
   )
}