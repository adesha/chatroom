import React from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import { Button } from '@mui/material'

function Signin() {
    function signInWithGoogle(){
        const provider=new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In with Google</Button>
    </div>
  )
}

export default Signin
