import { Navigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

const CheckAuth = ({
  children
}: {
    children?: React.ReactNode
}) => {
  const { mainReducer: token } = useAppSelector(s => s);




  if(token) {
    return <>{children}</>;
  }

  return <Navigate to={'/auth'}/>;

};


export default CheckAuth;