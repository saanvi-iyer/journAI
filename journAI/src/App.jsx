import React from "react"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"

const App = () => {
  return (
    <>
      <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
      </Router>
    </>
  )
}
export default App
