import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { isAuth } = useAuthContext();

    if(!isAuth) {
        return <Navigate to='/login' />;
    }

    return children ? children : <Outlet />
};



// export const RouteGuard = ({
//     children
// }) => {
//     const { isAuth } = useAuthContext();

//     if(!isAuth) {
//         return <Navigate to='/login' />
//     }

//     return (
//         <>
//             {children}
//         </>
        
//     );
// };