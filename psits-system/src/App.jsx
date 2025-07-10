import Students from "./pages/Admin/Students";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Events from "./pages/Admin/Events";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Login />} />

        {/* Admin Routes */}
        <Route path="admin">
          <Route path="students" element={<Students />}></Route>
          <Route path="events" element={<Events />}></Route>
        </Route>

        {/* Student Routes */}
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
