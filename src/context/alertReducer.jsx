export const HIDE_ALERT = 'HIDE_ALERT'
export const SHOW_ALERT = 'SHOW_ALERT'

debugger
export const alertReducer = (state, action) => {
   switch (action.type) {
      case SHOW_ALERT:
      debugger
         return { ...state, ...action.state, visible: true }

      case HIDE_ALERT:

         return { ...state, visible: false }

      default:
         return { ...state }
   }
}