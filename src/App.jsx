import { useState } from "react"
import { Dashboard, Login } from "./component/Main"

function App() {
  const [login,setLogin] = useState(false)

  const logIn = () => {
    setLogin(true)
  }
  const signOut = () => {
    setLogin(false)
  }
  
  return (
   <>
   {
    login ? (
   <>
    <Dashboard/>
    <button onClick={ () => signOut()}>Logout</button>
  
   </>
  ):(
  
 <>
  <Login/>
  <button onClick={ () => logIn()}>LogIn</button>
  
 </>

)
    }


   </>
  )
}

export default App
