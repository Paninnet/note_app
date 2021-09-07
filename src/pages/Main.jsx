import React, { useContext, useEffect } from 'react'
import { Alert } from '../components/Alert'
import { Form } from '../components/Form'
import { Loader } from '../components/Loader'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Main = () => {

   const {state,fetchNotes,deleteNote} = useContext(FirebaseContext)
   useEffect(() =>{
      fetchNotes()
   },[])

   
   return (
      <div>
         <Alert/>
         <Form/>
         {state.loading ? <Loader/> : <Notes note={state.notes} onRemove={deleteNote} />} 
      </div>
   )
}