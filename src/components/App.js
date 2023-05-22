import Signup from "./authentication/Signup"
import ForgotPassword from "./authentication/ForgotPassword"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from "./authentication/PrivateRoute";
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"



function App() {
  return (
        <Router>
          <AuthProvider>
            <Routes>
              {/* drive */}
              <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

              <Route exact path="/folder/:folderId" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

              {/* profile */}
              <Route path="/user" element={<PrivateRoute><Profile /></PrivateRoute>}
              ></Route>
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}
              ></Route>
              {/* auth */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
