import { useAppSelector } from "@hooks/reduxHooks";
import { Navigate } from "react-router-dom";

const CheckAuth = ({
  children
}: {
  children?: React.ReactNode
}) => {
  const { mainReducer: token } = useAppSelector(s => s);




  if (token) {
    return <>{children}</>;
  }

  return <Navigate to={'/auth'} />;

};


export default CheckAuth;