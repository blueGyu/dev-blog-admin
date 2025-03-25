import { useNavigate } from "react-router";
import styled from "styled-components";

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 1rem;
`;

const CreatePost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/write");
  };

  return <StyleButton onClick={handleClick}>글쓰기</StyleButton>;
};

export default CreatePost;
