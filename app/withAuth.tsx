import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';

const withAuth = (WrappedComponent: React.FC) => {
  const Wrapper: React.FC = (props) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }, [loading, user, router]);

    if (loading || !user) {
      return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;