import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);
    
    if(loader){
        return <div className='min-h-screen'><span className="loading loading-spinner text-accent block mt-40 mx-auto"></span></div>
    }
    if( !user ){
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
    return (
        <>
          {
            children
          }  
        </>
    );
};

export default PrivateRoute;