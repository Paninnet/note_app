import React, { useContext, useEffect } from 'react'
import { Alert } from '../components/Alert'
import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'
import { firebaseContext } from '../context/firebase/firebaseContext'

export const Main = () => {
   const note = new Array(5).fill("").map((_,i) =>{
      return({id:i,title:"Заметка"})
   })

   const {state,load, fetch} = useContext(firebaseContext)

   useEffect(() =>{
      fetch()
   },[])

   console.log(state.loading);

   debugger
   return (
      <div>
         <Alert/>
         <Form/>
         {state.loading ? <Loader/> : <Notes note={state.notes}/>}
         
         
      </div>
   )
}