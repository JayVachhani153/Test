import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthGuard from '../components/auth';
import { ROUTE } from '../constants/route';


const Layout = lazy(() => import('../components/layout'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const MyAccount = lazy(() => import('../pages/MyAccount'))

const Routing = () => {
    return (
        <Routes>
            <Route path={ROUTE.login} element={<SignIn />} />
            <Route path='/' element={<AuthGuard><Layout /></AuthGuard>}>
                <Route index path={ROUTE.default} element={<Dashboard />} />
                <Route path={ROUTE.myAccount} element={<MyAccount />} />
                <Route path={ROUTE.default} element={<Navigate replace to={ROUTE.dashboard} />} />
            </Route>
            <Route path="*" element={<Navigate replace to={ROUTE.default} />} />
        </Routes>
    );
}

export default Routing;