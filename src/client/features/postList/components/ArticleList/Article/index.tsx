import type { ArticleMetaDataProps } from "../../../types";

import { useNavigate } from "react-router";
import styled from "styled-components";

import Thumbnail from "./Thumbnail";
import MetaData from "./MetaData";

const StyledArticle = styled.article`
  display: flex;
  height: 12.5rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 5px rgba(153, 153, 153, 0.2);
    -moz-box-shadow: 0px 0px 10px 5px rgba(153, 153, 153, 0.2);
    box-shadow: 0px 0px 10px 5px rgba(153, 153, 153, 0.2);
  }
`;

const Article = ({ ...post }: ArticleMetaDataProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${post.slug}`);
  };

  return (
    <StyledArticle onClick={handleClick}>
      <MetaData
        title={post.title}
        description={post.description}
        views={post.views}
        created_at={post.created_at}
      />
      <Thumbnail thumbnail={post.thumbnail} thumbnail_alt={post.thumbnail_alt} />
    </StyledArticle>
  );
};

export default Article;
