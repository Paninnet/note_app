import React, { useContext } from 'react'
import { firebaseContext } from '../context/firebase/firebaseContext'

export const Notes = ({ note }) => {
const {delet_note} = useContext(firebaseContext)
   debugger
   return (
      <ul className='list-group'>
         {note.map((_, i) => {
            return (<li className='list-group-item' key={i + 1}>
               <div className='note_data'>
                  <span className='note_body'>{i + 1}) {note[i].title}</span>
                  <span className='data'>{new Date().toLocaleDateString()}</span>
                  <span className='data'>{new Date().toLocaleTimeString()}</span>
               </div>
               <button onClick={()=>delet_note(note[i].id)} type="button" class="btn btn-outline-danger">&times;</button>

            </li>)
         })}

      </ul>
   )
}