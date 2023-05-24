
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Laout';
import Homepage from "./pages/Homepage";
import SignInUP from './components/Body/SingInUp';
import PasswordRetrieve from './pages/PasswordRetrieve';
import EditorPage from './pages/EditorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {path: "/", element: <Homepage/>},
      {path: "/EditorPage", element: <EditorPage/>},
      {path: "/Signup", element: <SignInUP/>},
      {path: "/Signup/passwordreq", element: <PasswordRetrieve/>}

    ]
  }
])

function App() {
  
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
