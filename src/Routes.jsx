import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HOMEPAGE = React.lazy(() => import("pages/HOMEPAGE"));
const LOGINPAGE = React.lazy(() => import("pages/LOGINPAGE"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LOGINPAGE />} />
          <Route path="/homepage" element={<HOMEPAGE />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
