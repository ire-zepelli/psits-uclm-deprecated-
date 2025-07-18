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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Report from "./pages/Admin/Report";
import ErrorPage from "./pages/ErrorPage";
import AdminPosts from "./pages/Admin/AdminPosts";
import StudentLanding from "./pages/Student/StudentLanding";
import Events from "./pages/Student/Events";
import About from "./pages/Student/About";
import Blog from "./pages/Student/Blog";
import StudentLayout from "./pages/Student/StudentLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Admin Routes */}
        <Route path="admin">
          <Route index element={<AdminDashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="reports" element={<Report />} />
          <Route path="posts" element={<AdminPosts />} />
        </Route>

        {/* Student Routes */}
        <Route element={<StudentLayout />}>
          <Route index element={<StudentLanding />} />
          <Route path="login" element={<Login />} />
          <Route path="events" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>

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
