import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Profile from "./pages/profile/Profile"
import Chatbot from "./pages/chatbot/Chatbot"
import Error from "./pages/404/Error"
import { useContext } from "react"
import { Redirect } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            {user?<Home/>: <Login/>}
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/>: <Login/>}
        </Route>
        <Route path="/register">
        {user? <Redirect to="/login"/>: <Register/>}
        </Route>
        <Route path="/profile/:username">
            <Profile/>
        </Route>
        <Route path="/chatbot">
          <Chatbot/>
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
    )
}

export default App;
