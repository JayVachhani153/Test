import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../constants/route';

import './header.scss';

const Header = () => {
    const navigate = useNavigate()
    const onLogout = async () => {
        console.log("click logout")
        navigate(ROUTE.login)
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 >Header</h2>
                <button type='button' onClick={onLogout}>Logout</button>
            </div>
        </>
    );
}

export default Header;