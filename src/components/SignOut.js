import React from 'react'
import { auth } from '../firebase'
function SignOut() {
  return (
    <div>
      <button onClick={()=>auth.signOut()}>Log Out</button>
    </div>
  )
}

export default SignOut
