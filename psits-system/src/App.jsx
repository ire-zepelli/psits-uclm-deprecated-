import Students from "./pages/Admin/Students";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
import Event from "./pages/Student/Event";
import Reports from "./pages/Student/Reports";
import AdminPosts from "./pages/Admin/AdminPosts";
import Posts from "./pages/Student/Posts";
import Announcement from "./pages/Student/Announcement";

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
          <Route path="posts" element={<AdminPosts />} />
        </Route>

        {/* Student Routes */}
        <Route index element={<StudentDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="announcement/:id" element={<Announcement />} />
        <Route path="events">
          <Route index element={<Events />} />
          <Route index path=":id" element={<Event />} />
        </Route>
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
