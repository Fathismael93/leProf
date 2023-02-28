import { createSlice } from '@reduxjs/toolkit'
import { REJECTED_STATUS, RESOLVED_STATUS } from '../utils/constants'

// le state initial de cette feature est un objet vide
const initialState = {
  // chaque propriété de cet objet correspond à l'Id d'un freelance
  prof: null,
  error: null,
  status: ''
}

const { actions, reducer } = createSlice({
  name: 'prof',
  initialState,
  reducers: {
    resolved: (draft, action) => {
          draft.prof = action.payload
          draft.status = RESOLVED_STATUS
          return
    },
    rejected: (draft, action) => {
          draft.error = action.payload
          draft.prof = null
          draft.status = REJECTED_STATUS
          return
    },
    initialize: (draft) => {
          draft.prof = null
          draft.status = ''
          draft.error = null
          return
    },
  },
})

export const { resolved, rejected, initialize } = actions
export default reducer