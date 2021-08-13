export const LOADING = 'LOADING'
export const FETCH_ALL_NOTES = 'FETCH_ALL_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'


export const firebaseReducer = (state, action) => {
   switch (action.type) {
      case LOADING:
         return { ...state, loading: true }
      case FETCH_ALL_NOTES:
         return { ...state,notes:action.payload ,loading: false  }
      case ADD_NOTE:
         return{...state, notes:[...state.notes, action.payload]}
      case DELETE_NOTE:
         return{...state, notes:state.notes.filter(note => note.id !== action.payload)}

      default:
         return{...state}
   }
}