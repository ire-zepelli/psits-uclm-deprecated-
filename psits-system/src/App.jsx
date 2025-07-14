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
import StudentDashboard from "./pages/Student/StudentDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Report from "./pages/Admin/Report";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="admin">
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="events" element={<Events />} />
          <Route path="reports" element={<Report />} />
        </Route>

        {/* Student Routes */}
        <Route index element={<StudentDashboard />} />
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
