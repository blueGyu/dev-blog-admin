import App from "@client/App";
import { BrowserRouter, Route, Routes } from "react-router";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<div>layout</div>}>
          <Route path="posts">
            <Route index element={<h2>post list page</h2>} />
            <Route path=":post_id">
              <Route index element={<h2>post view page</h2>} />
              <Route path="edit" element={<h2>post edit page</h2>} />
            </Route>
          </Route>
        </Route>
        <Route path="write" element={<h2>post write page</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
