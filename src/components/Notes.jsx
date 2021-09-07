import React from 'react'

export const Notes = ({ note, onRemove }) => {


   return (
      <ul className='list-group'>
         {note.map((_, i) => {
            return (<li className='list-group-item' key={i + 1}>
               <div className='note_data'>
                  <span className='note_body'>{i + 1}) {note[i].title}</span>
                  <span className='data'>{note[i].date}</span>
                  <span className='data'>{note[i].time}</span>
               </div>
               <button onClick={() =>onRemove(note[i].id)} type="button" class="btn btn-outline-danger">&times;</button>

            </li>)
         })}

      </ul>
   )
}