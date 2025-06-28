import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import CreateJob from "./pages/CreateJob";
import UpdateJob from "./pages/UpdateJob";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="alljobs" element={<Jobs />} />
          <Route path="job/:id" element={<Job />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="update-job/:id" element={<UpdateJob />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
