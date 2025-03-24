// 게시글 리스트 조회
export const getPostList = async () => {
  try {
    const response = await fetch("http://localhost:3000/json/post-list-mock-data.json", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    const results = await response.json();
    return results;
  } catch (error) {
    console.error("게시글 리스트 조회 실패:", error);
    throw error;
  }
};
