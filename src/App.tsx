import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { SnackbarProvider } from "notistack";


import { CardView } from './pages/Cards'; // CardView page
import Dashbord from './pages/Dashbord';
import { Todo } from './Components/Todo';
import { AllBlog } from './pages/AllBlog';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />}>
            <Route path="card" element={<CardView />} />
            <Route path="todo" element={<Todo />} />
            <Route path="allBlog" element={<AllBlog />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
