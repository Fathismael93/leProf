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
  name: 'rdv',
  initialState,
  reducers: {
    // resolved action & reducer
    resolvedRDV: (draft, action) => {
      draft.data.push({
        ...action.payload.data()
      })
      draft.status = RESOLVED_STATUS
      return
    },
    // rejected action & reducer
    rejectedRDV: (draft, action) => {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        draft.status = REJECTED_STATUS
        draft.error = action.payload
        draft.data = null
        return
    }
  }
})

export const { resolvedRDV, rejectedRDV } = actions
export default reducer