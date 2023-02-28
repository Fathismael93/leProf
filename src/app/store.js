//src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import profsReducer from '../features/profsSlice';
import newSigningReducer from '../features/adminNewSigningSlice'
import enAttenteReducer from '../features/enAttenteSlice'
import rdvReducer from '../features/rdvSlice'
import messagesReducer from '../features/messagesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    profs: profsReducer,
    newSigning: newSigningReducer,
    enAttente: enAttenteReducer,
    rdv: rdvReducer,
    messages: messagesReducer,
  },
});
