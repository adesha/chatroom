import './App.css';
import Signin from './components/Signin';
import ChatRoom from './components/ChatRoom';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user]=useAuthState(auth)
  return (
    <>
      {user?<ChatRoom/>:<Signin/>}
    </>
  );
}

export default App;
