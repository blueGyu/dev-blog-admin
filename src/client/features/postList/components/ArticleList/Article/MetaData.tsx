import type { ArticleMetaDataProps } from "../../../types";

import styled from "styled-components";

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  flex: 1;
`;

const MetaData = ({
  title,
  description,
  views,
  created_at,
}: Pick<ArticleMetaDataProps, "title" | "description" | "views" | "created_at">) => {
  return (
    <StyledDiv>
      <h3>{title}</h3>
      <StyledP>{description}</StyledP>
      <div>
        <span>{views}</span> ﹒ <span>{created_at}</span>
      </div>
    </StyledDiv>
  );
};

export default MetaData;
