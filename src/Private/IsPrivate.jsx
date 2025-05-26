import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import Swal from 'sweetalert2';
import { UserContext } from '../Context/UserContext';
import Loading from '../Components/loading';

const IsPrivate = ({ children }) => {
  const { loginUser, loading } = useContext(UserContext)
  console.log(loading)
  const [isRedirect, setIsRedirect] = useState(false)
  useEffect(() => {
    if (!loginUser && !loading) {
      Swal.fire({
        title: "You Don't Have Access...",
        text: `🔏 You need to login first to access this page`,
        icon: 'error',
        allowOutsideClick: false,
        confirmButtonText: 'Login Now',
        buttonsStyling: true,
        customClass: { confirmButton: 'sweetClass' }
      }).then((result) => {
        if (result.isConfirmed) {
          setIsRedirect(true);
        }
      });
    }
  }, [loginUser, loading]);
  if (loading) {
    return <Loading />
  }
  if (!loginUser && isRedirect) {
    return <Navigate to='/signin'></Navigate >
  }
  if (!loginUser) {
    return <div style={{ minHeight: '100vh' }}></div>
  }
  return (<>
    {children}
  </>
  );
};

export default IsPrivate;