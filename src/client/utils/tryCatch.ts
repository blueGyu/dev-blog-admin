export const tryCatch = <T>(func: () => T, fallback: T) => {
  try {
    return func();
  } catch (error) {
    console.error("error: ", error);
    return fallback;
  }
};

export const tryCatchWithAsync = async <T>(func: () => Promise<T>, fallback: T) => {
  try {
    return await func();
  } catch (error) {
    console.error("error: ", error);
    return fallback;
  }
};
