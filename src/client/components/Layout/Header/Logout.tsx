import styled from "styled-components";

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 1rem;
`;

const Logout = () => {
  return <StyleButton>로그아웃</StyleButton>;
};

export default Logout;
