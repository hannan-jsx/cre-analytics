import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function BeforeLoginRoute({ element: Element }) {
  const isAuthenticated = useSelector((state) => state.authReducer.isLogin);
  return <>{!isAuthenticated ? Element : <Navigate replace to="/" />}</>;
}
export default BeforeLoginRoute;
