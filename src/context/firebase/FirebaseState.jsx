import React, { useReducer } from 'react'
import { firebaseContext } from './firebaseContext'
import { ADD_NOTE, DELETE_NOTE, FETCH_ALL_NOTES, firebaseReducer, LOADING } from './firebaseReducer'
import axios from 'axios'

export const FirebaseState = ({ children }) => {

   const url = 'https://react-note-2-default-rtdb.firebaseio.com'

   const initialstate = {
      loading: false,
      notes: []
   }

   const [state, dispatch] = useReducer(firebaseReducer, initialstate)

   const load = () => {
      dispatch({ type: LOADING })
   }

   debugger
   const fetch = async () => {
      load()
      const res = await axios.get(`${url}/notes.json`)
      console.log('FETCH', res.data);
     const payload = Object.keys(res.data).map (key =>{
         return{
            ...res.data[key],id:key
         }
      })
      dispatch({ type: FETCH_ALL_NOTES,payload })
   }

   const add = async (title) => {
      const note = { title, data: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() }
      try {
         const res = await axios.post(`${url}/notes.json`, note)
         console.log('ADD', res.data);
         const payload = {
            ...note, id: res.data.name
         }
         dispatch({ type: ADD_NOTE, payload })
      } catch (error) {
         throw new Error('sdf')
      }
   }

   const delet_note = async (id) =>{
      const res = await axios.delete(`${url}/notes/${id}.json`)
      dispatch({type:DELETE_NOTE,payload:id})
   }

   return (
      <firebaseContext.Provider value={{ load, fetch, add, state, delet_note }}>
         {children}
      </firebaseContext.Provider>
   )
}