export const isAuth = () => {
  const refreshToken = localStorage.getItem("refreshToken");

  return !!refreshToken;
};
