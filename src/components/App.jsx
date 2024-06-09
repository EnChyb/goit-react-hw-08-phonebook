import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/operations";
import { Layout } from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import Contacts from "../pages/Contacts/Contacts";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]
  );

  return isRefreshing ? (<b>Refreshing user ...</b>) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/contacts" element ={<PrivateRoute redirectTo="/login" component={<Contacts />} /> } />
        </Route>
      </Routes>
    </div>
  )
};