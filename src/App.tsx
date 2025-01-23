import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbord from './pages/Dashbord';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          {/* Optionally, you can add a route for Dashbord if needed */}
          {/* <Route path="/dashboard" element={<Dashbord />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
