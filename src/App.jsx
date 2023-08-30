import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Error,
  Allstories,
  Mystories,
  Singlestories,
  Edit,
  Create,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import { Suspense, lazy } from "react";
import Toast from 'react-hot-toast'
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const Welcome = lazy(() => import("./pages/Welcome"));
function App() {

  return (
    <>
      <Toast/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading/>}>
                <Home />
              </Suspense>
            }
          />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/welcome"
              element={
                <Suspense fallback={<h2>Loading...</h2>}>
                  <Welcome />
                </Suspense>
              }
            />
            <Route path="/allstories" element={<Allstories />} />
            <Route path="/mystories" element={<Mystories />} />
            <Route path="/create" element={<Create />} />
            <Route path="/single/:storyId" element={<Singlestories />} />
            <Route path="/edit/:storyId" element={<Edit />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
