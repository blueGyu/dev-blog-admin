import { BrowserRouter, Route, Routes } from "react-router";

import App from "@client/App";
import Layout from "@client/components/Layout";
import PostList from "@client/features/postList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<Layout />}>
          <Route path="posts">
            <Route index element={<PostList />} />
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
