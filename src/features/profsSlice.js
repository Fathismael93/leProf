import { createSlice } from '@reduxjs/toolkit'
import { FETCHING_STATUS, REJECTED_STATUS, RESOLVED_STATUS } from '../utils/constants'

// Le state initial de la feature freelances
const initialState = {
  // le statut permet de suivre l'état de la requête
  status: '',
  // les données lorsque la requête a fonctionné
  data: null,
  // l'erreur lorsque la requête échoue
  error: null,
}

const { actions, reducer } = createSlice({
  name: 'profs',
  initialState,
  reducers: {
    fetching: (draft) => {
      draft.status = FETCHING_STATUS
      draft.data = []
    },
    // resolved action & reducer
    resolved: (draft, action) => {

      draft.data.push({
        ...action.payload
      })
      draft.status = RESOLVED_STATUS
      return
    },
    // rejected action & reducer
    rejected: (draft, action) => {
        // on passe en rejected, on sauvegarde l'erreur et on supprime les données
        draft.status = REJECTED_STATUS
        draft.error = action.payload
        draft.data = null
        return
    }
  }
})

export const { resolved, rejected, fetching } = actions
export default reducer