import { createSlice } from '@reduxjs/toolkit'
import { REJECTED_STATUS, RESOLVED_STATUS } from '../utils/constants'

// Le state initial de la feature freelances
const initialState = {
  // le statut permet de suivre l'état de la requête
  status: '',
  // les données lorsque la requête a fonctionné
  data: [],
  // l'erreur lorsque la requête échoue
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    // resolved action & reducer
    resolvedMessages: (draft, action) => {
      draft.data.push({
        ...action.payload.data()
      })
      draft.status = RESOLVED_STATUS
      return
    },
    // rejected action & reducer
    rejectedMessages: (draft, action) => {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        draft.status = REJECTED_STATUS
        draft.error = action.payload
        draft.data = null
        return
    }
  }
})

export const { resolvedMessages, rejectedMessages } = actions
export default reducer