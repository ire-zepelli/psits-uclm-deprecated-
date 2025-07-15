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
import AdminEvents from "./pages/Admin/AdminEvents";
import StudentDashboard from "./pages/Student/StudentDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Report from "./pages/Admin/Report";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/Student/About";
import Events from "./pages/Student/Events";
import Reports from "./pages/Student/Reports";
import Posts from "./pages/Admin/Posts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="admin">
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="reports" element={<Report />} />
          <Route path="posts" element={<Posts />} />
        </Route>

        {/* Student Routes */}
        <Route index element={<StudentDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="reports" element={<Reports />} />

        {/* Error Routes */}
        <Route path="error/:error" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
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
