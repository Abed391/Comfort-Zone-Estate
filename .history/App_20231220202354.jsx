import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Client/src/pages/Home';
import SignUp from './Client/src/pages/SignUp';
import SignIn from './Client/src/pages/SignIn';
import About from './Client/src/pages/About';
import Profile from './Client/src/pages/Profile';
import Header from './Client/src/components/Header';
import PrivateRoute from './Client/src/components/PrivateRoute';
import CreateListing from './pages/CreateListing';
export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-listing" element={<CreateListing />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
