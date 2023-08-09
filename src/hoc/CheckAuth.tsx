import { useAppSelector } from "@hooks/reduxHooks";
import { FC, PropsWithChildren } from 'react';
import { Navigate } from "react-router-dom";

const CheckAuth: FC<PropsWithChildren> = ({ children }) => {
  const { mainReducer: { token } } = useAppSelector(s => s);

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to={'/auth'} />;
};

export default CheckAuth;