import type { CategoryProps } from "../../types";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { tryCatchWithAsync } from "@client/utils/tryCatch";
import { getCategoryListFromApi } from "../../services";
import CategoryItem from "./CategoryItem";

const StyledCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  gap: 0.75rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
`;

const CategoryList = () => {
  const [cateogryList, setCategoryList] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const getCategoryList = tryCatchWithAsync<void>(async () => {
      const categoryList = await getCategoryListFromApi;
      setCategoryList(categoryList);
    }, setCategoryList([]));

    getCategoryList;
  }, []);

  if (!cateogryList) return;

  return (
    <StyledCategoryContainer>
      {cateogryList.map((category) => (
        <CategoryItem key={category.idx} name={category.name} />
      ))}
    </StyledCategoryContainer>
  );
};

export default CategoryList;
