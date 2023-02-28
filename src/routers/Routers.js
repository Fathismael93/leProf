import { Route, Routes, Navigate} from 'react-router-dom'

import Home from '../pages/Home/Home';
import Login from "../pages/Login/Login";
import ProfilUser from '../pages/ProfilUser/ProfilUser';
import ProfilProf from '../pages/ProfilProf/ProfilProf';
import EditProfil from '../pages/Edit_Profil/EditProfil';
import SignUp from "../pages/Signup/Signup";
import RDV from '../pages/RDV/RDV';
import Connexion from '../admin/Connexion/Connexion';
import Contact from '../pages/Contact/Contact';
import Mission from '../pages/Mission/Mission';
import Tarification from '../pages/Tarification/Tarification';
import Dashboard from '../admin/Dashboard/Dashboard';
import Inscription from '../admin/Inscription/Inscription';
import Message from '../admin/Message/Message';
import AdminRDV from '../admin/AdminRDV/AdminRDV';
import EnAttente from '../admin/EnAttente/EnAttente';

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/mission' element={<Mission />} />
      <Route path='/adminConnect' element={<Connexion />} />
      <Route path='/inscriptionAdmin' element={<Inscription />} />
      <Route path='/messageAdmin' element={<Message />} />
      <Route path='/enAttente' element={<EnAttente />} />
      <Route path='/rdvAdmin' element={<AdminRDV />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/tarification' element={<Tarification />} />
      <Route path='/profilUser' element={<ProfilUser />} />
      <Route path='/profilProf/:id' element={<ProfilProf />} />
      <Route path='/editProfil' element={<EditProfil />} />
      <Route path='/rdvPage/:id' element={<RDV />} />
    </Routes>
  )
}

export default Routers