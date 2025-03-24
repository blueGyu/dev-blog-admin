import styled from "styled-components";
import CreatePost from "./CreatePost";
import Logout from "./Logout";

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  background-color: #ffffff;
`;

const StyledUl = styled.ul`
  display: flex;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>BLUEGYU</h1>
      <nav>
        <StyledUl>
          <li>
            <CreatePost />
          </li>
          <li>
            <Logout />
          </li>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
