import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LS_USER } from '../../constants';
import { ROUTE } from '../../constants/route';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();

    const isLoggedIn = JSON.parse(localStorage.getItem(LS_USER))

    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {

        if (isLoggedIn === undefined) navigate(ROUTE.login, { replace: true });

    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard;