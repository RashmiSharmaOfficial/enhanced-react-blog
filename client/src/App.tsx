import '@/App.css'
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/Topbar";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import { Context, ContextProvider } from "./context/Context";

const App: React.FC = () => {
  // Move useContext inside ContextProvider
  return (
    <ContextProvider>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterWrapper />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/write" element={<WriteWrapper />} />
          <Route path="/settings" element={<SettingsWrapper />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

// Create wrapper components to access the user context
const RegisterWrapper: React.FC = () => {
  const { user } = useContext(Context)!; // Non-null assertion if you're sure it's defined
  return user ? <Home /> : <Register />;
};

const LoginWrapper: React.FC = () => {
  const { user } = useContext(Context)!;
  return user ? <Home /> : <Login />;
};

const WriteWrapper: React.FC = () => {
  const { user } = useContext(Context)!;
  return user ? <Write /> : <Register />;
};

const SettingsWrapper: React.FC = () => {
  const { user } = useContext(Context)!;
  return user ? <Settings /> : <Register />;
};

export default App;
