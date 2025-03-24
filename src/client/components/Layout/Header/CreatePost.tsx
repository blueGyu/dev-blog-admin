import styled from "styled-components";

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 1rem;
`;

const CreatePost = () => {
  return <StyleButton>글쓰기</StyleButton>;
};

export default CreatePost;
