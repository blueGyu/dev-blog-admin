import type { ArticleMetaDataProps, CategoryProps } from "./types";
import { tryCatchWithAsync } from "@client/utils/tryCatch";

// 게시글 리스트 조회
export const getPostList = tryCatchWithAsync<ArticleMetaDataProps[]>(async () => {
  const response = await fetch("http://localhost:3000/json/post-list-mock-data.json", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
  }
  const results = await response.json();
  return results;
}, []);

// 카테고리 리스트 조회
export const getCategoryListFromApi = tryCatchWithAsync<CategoryProps[]>(async () => {
  const response = await fetch("http://localhost:3000/json/category-list-mock-data.json", {
    method: "GET",
  });

  if (!response.ok) throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);

  const results = await response.json();
  return results;
}, []);
