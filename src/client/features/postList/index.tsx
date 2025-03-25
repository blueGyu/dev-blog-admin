import styled from "styled-components";

import ArticleList from "./components/ArticleList";
import CategoryList from "./components/CategoryList";

const StyledMain = styled.main`
  padding: 1.25rem;
  padding-top: calc(var(--header-height) + 1.25rem);
`;

const PostList = () => {
  return (
    <StyledMain>
      <CategoryList />
      <ArticleList />
    </StyledMain>
  );
};

export default PostList;
