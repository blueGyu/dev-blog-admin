import { useNavigate } from "react-router";
import { CategoryProps } from "../../types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  height: 2.5rem;

  &:hover {
    background-color: #999999;
  }
`;

const CategoryItem = ({ name }: Pick<CategoryProps, "name">) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts?category=${name}`);
  };

  return <StyledButton onClick={handleClick}>{name}</StyledButton>;
};

export default CategoryItem;
