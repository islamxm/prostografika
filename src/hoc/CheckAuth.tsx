import { useAppSelector } from "../hooks/reduxHooks";


const CheckAuth = ({
    children
}: {
    children?: React.ReactNode
}) => {
    const {mainReducer: token} = useAppSelector(s => s)


    return children;

}


export default CheckAuth;