import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

function PrivateRoute(){

    let {user} = useContext(AuthContext);
  
    return user ? <Outlet /> : <Navigate to="/log-in"/>;
  }
  
  export default PrivateRoute;