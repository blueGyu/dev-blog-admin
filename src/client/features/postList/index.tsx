import type { ArticleMetaDataProps } from "./types";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { getPostList } from "./services";
import Article from "./components/Article";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostList = () => {
  const [postList, setPostList] = useState<ArticleMetaDataProps[]>([]);

  useEffect(() => {
    const getPostListFromAPI = async () => {
      const postList = await getPostList();
      setPostList(postList);
    };

    getPostListFromAPI();
  });

  return (
    <main>
      <StyledPostContainer>
        {postList.map((post) => (
          <Article {...post} />
        ))}
      </StyledPostContainer>
    </main>
  );
};

export default PostList;
