import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashbord from './pages/Dashbord';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
