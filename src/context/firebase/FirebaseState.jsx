import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'
import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES, firebaseReducer, LOADING } from './firebaseReducer'
import axios from 'axios'

export const FirebaseState = ({ children }) => {

   const url = `https://react-note-fd039-default-rtdb.firebaseio.com/`

   const initialstate = {
      loading: false,
      notes: []
   }
   const load = () => {
      dispatch({ type: LOADING })
   }
   debugger

   const fetchNotes = async () => {
      load()
      const res = await axios.get(`${url}/notes.json`)
      let payload = []
      if (res.data) {
        
         console.log('FETCH', res.data);

         payload= Object.keys(res.data).map(key => {
            return {
               ...res.data[key],
               id: key
            }
         })
         dispatch({ type: FETCH_NOTES, payload })
      }
      else{
         dispatch({ type: FETCH_NOTES, payload })
      }

   }

   const addNotes = async (title) => {
      const note = {
         title, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString()
      }
      try {
         const res = await axios.post(`${url}/notes.json`, note)
         console.log('ADD', res.data);

         const payload = {
            ...note,
            id: res.data.name
         }

         dispatch({ type: ADD_NOTE, payload })
      } catch (error) {
         throw new Error(error.message)
      }

   }

   const deleteNote = async (id) => {
      const res = await axios.delete(`${url}/notes/${id}.json`)

      dispatch({ type: DELETE_NOTE, payload: id })
   }

   const [state, dispatch] = useReducer(firebaseReducer, initialstate)
   return (
      <FirebaseContext.Provider value={{ load, state, fetchNotes, addNotes, deleteNote }} >
         {children}
      </FirebaseContext.Provider>
   )
}

