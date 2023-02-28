import { getDocs, getDoc, setDoc, doc, updateDoc, collection, query, where} from 'firebase/firestore';
import { db } from '../firebase.config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import { resolved, rejected } from "../features/profsSlice";
import { logout } from '../features/userSlice'
import { login } from '../features/userSlice'
import { ANNULER_STATUS, EN_ATTENTE_STATUS, MESSAGES_COLLECTION, NEW_SIGNING_STATUS, RDV_COLLECTION, TRAITER_STATUS, USERS_COLLECTION, VALIDER_STATUS } from './constants';
import { rejectedNew, resolvedNew } from '../features/adminNewSigningSlice';
import { rejectedAttente, resolvedAttente } from '../features/enAttenteSlice';
import { rejectedRDV, resolvedRDV } from '../features/rdvSlice';
import { rejectedMessages, resolvedMessages } from '../features/messagesSlice';


export const handleRefuserSigning = (id, setLoading) => {
    try {
      setLoading(true)
        // store user data in firestore database
        updateDoc(doc(db, USERS_COLLECTION, id), {
            status: ANNULER_STATUS
          })

          toast.success('Annulé avec succès')
          setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
}

export const handleAccepterSigning = (id, setLoading) => {
    try {
      setLoading(true)
        // store user data in firestore database
        updateDoc(doc(db, USERS_COLLECTION, id), {
            status: VALIDER_STATUS
          })

          toast.success('Validé avec succès')
          setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
}

export const getMessagesAttente = (dispatch) => {
  const messages = query(collection(db, MESSAGES_COLLECTION), where('status','==', EN_ATTENTE_STATUS))
  const messagesSnapshot = getDocs(messages)
  messagesSnapshot.then((snapshot) => {
      snapshot.forEach(doc => {
        dispatch(resolvedMessages(doc))
      })
    }).catch(err => {
      dispatch(rejectedMessages(err))
    })
}

export const getRDVAttente = (dispatch) => {
  const rdv = query(collection(db, RDV_COLLECTION), where('status','==', EN_ATTENTE_STATUS))
  const rdvSnapshot = getDocs(rdv)
  rdvSnapshot.then((snapshot) => {
      snapshot.forEach(doc => {
        dispatch(resolvedRDV(doc))
      })
    }).catch(err => {
      dispatch(rejectedRDV(err))
    })
}

export const getAttenteSigning = (dispatch) => {
  const enAttente = query(collection(db, USERS_COLLECTION), where('status','==', EN_ATTENTE_STATUS))
  const enAttenteSnapshot = getDocs(enAttente)
  enAttenteSnapshot.then((snapshot) => {
      snapshot.forEach(doc => {
        dispatch(resolvedAttente(doc))
      })
    }).catch(err => {
      dispatch(rejectedAttente(err))
    })
}

export const getNewSigning = (dispatch) => {
  const newSigning = query(collection(db, USERS_COLLECTION), where('status','==', NEW_SIGNING_STATUS))
  const newSigningSnapshot = getDocs(newSigning)
  newSigningSnapshot.then((snapshot) => {
      snapshot.forEach(doc => {
        dispatch(resolvedNew(doc))
      })
    }).catch(err => {
      dispatch(rejectedNew(err))
    })
}

export const handleRefuserRDV = (id, setLoading) => {
    try {
      setLoading(true)
        // store user data in firestore database
        updateDoc(doc(db, RDV_COLLECTION, id), {
            status: ANNULER_STATUS
          })

          toast.success('Annulé avec succès')
          setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
}

  export const handleAccepterRDV = (id, setLoading) => {
    try {
      setLoading(true)
        // store user data in firestore database
        updateDoc(doc(db, RDV_COLLECTION, id), {
            status: TRAITER_STATUS
          })

          toast.success('Validé avec succès')
          setLoading(false)
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
}

export const saveDataProfile = (user, setLoading, navigate, bio, adresse, college, lycee, available) => {
  try {
      setLoading(true)
        // store user data in firestore database
        updateDoc(doc(db, USERS_COLLECTION, user.uid), {
            bio,
            adresse,
            college,
            lycee,
            available,
            status: EN_ATTENTE_STATUS
          })

          toast.success('Ajouté avec succès')
          setLoading(false)
          navigate('/profilUser')
      } catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
}

export const saveRDV = async (prof, clientName, clientPhone, clientEmail, nbEleves, niveau, date, navigate, setLoading) => {
  try {
        await setDoc(doc(db, RDV_COLLECTION, prof.uid), {
            profID: prof.uid,
            profEmail: prof.email,
            profNumber: prof.phone,
            profName: prof.username,
            clientName,
            clientPhone,
            clientEmail,
            nbEleves,
            niveau,
            date,
            status: EN_ATTENTE_STATUS,
        })

        toast.success('Envoyé ')
        setLoading(false)
        navigate('/home')
    } catch (error) {
      setLoading(false)
      toast.error('Une erreur est survenue! Vérifiez votre connexion')
    }
}

export const saveMessage = async (contactName, contactEmail, contactPhone, contactMessage, date, navigate, setLoading) => {
  try {
        await setDoc(doc(db, MESSAGES_COLLECTION, contactName), {
            contactName,
            contactEmail,
            contactPhone,
            contactMessage,
            date,
            status: EN_ATTENTE_STATUS,
        })

        toast.success('Message envoyé')
        setLoading(false)
        navigate('/home')
    } catch (error) {
      setLoading(false)
      toast.error('Une erreur est survenue! Vérifiez votre connexion')
    }
}

export const getUserDocument = (user, setBio, setCollege, setLycee, setAdresse, setAvailable, setLoading) => {
  if (user) {
    const docSnap =  getDoc(doc(db, USERS_COLLECTION, user.uid))
    docSnap.then((querySnapshot)=>{
      const data = querySnapshot.data()

      setBio(data.bio)
      setCollege(data.college)
      setLycee(data.lycee)
      setAdresse(data.adresse)
      setAvailable(data.available)
      setLoading(false)
    })
  }
}

export const getAllProfs = ((dispatch) => {
  const queryDocuments = query(collection(db, USERS_COLLECTION), where("status", "==", VALIDER_STATUS));
    const docsSnapshot = getDocs(queryDocuments);
    docsSnapshot.then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        
        const prof = {
          adresse: doc.data().adresse,
          college: doc.data().college,
          email: doc.data().email,
          lycee: doc.data().lycee,
          available: doc.data().available,
          bio: doc.data().bio,
          modified: doc.data().modified,
          phone: doc.data().phone,
          status: doc.data().status,
          uid: doc.data().uid,
          userSex: doc.data().userSex,
          username: doc.data().username
        }

        dispatch(resolved(prof));
      })
    }).catch(err => {
      dispatch(rejected(err.message));
    })
})

export const signout = (dispatch, navigate) => {
    signOut(auth).then(() => {
    toast.success('Logged out')
    dispatch(logout())
    navigate('/login')
  }).catch(err => {
      toast.error(err.message)
  })
}

export const connectUser = async (dispatch, navigate, email, password, setLoading, setError) => {
    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName
          })
        );

      toast.success('Connecté(e)')
      navigate('/profilUser')

      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError('Une erreur est survenue! Vérifiez votre connexion')
    }
}

export const addUser = async (username, email, password, phone, userSex, setLoading, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      // update user profile
          await updateProfile(user, {
            displayName: username
          })

          // store user data in firestore database
          await setDoc(doc(db, USERS_COLLECTION, user.uid), {
            uid: user.uid,
            username,
            phone,
            email,
            userSex,
            status: NEW_SIGNING_STATUS,
            modified: false,
          })
          
          toast.success('Compte créé')
          setLoading(false)
          navigate('/login')
    } catch (error) {
      setLoading(false)
      toast.error('Une erreur est survenue! Vérifiez votre connexion')
    }
}