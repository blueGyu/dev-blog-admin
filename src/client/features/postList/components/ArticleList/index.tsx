import type { ArticleMetaDataProps } from "../../types";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { getPostList } from "../../services";
import Article from "./Article";
import { tryCatchWithAsync } from "@client/utils/tryCatch";

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArticleList = () => {
  const [postList, setPostList] = useState<ArticleMetaDataProps[]>([]);

  useEffect(() => {
    tryCatchWithAsync<void>(async () => {
      const postList = await getPostList;
      setPostList(postList);
    }, setPostList([]));
  }, []);

  return (
    <StyledPostContainer>
      {postList.map((post) => (
        <Article key={post.idx} {...post} />
      ))}
    </StyledPostContainer>
  );
};

export default ArticleList;
