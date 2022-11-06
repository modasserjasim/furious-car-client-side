import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const handleLoginWithGoogle = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                // applying JWT
                setAuthToken(user);

            })
            .catch(error => console.log(error))
    }
    return (
        <div className='text-center mb-8'>
            <p className='text-center'>Social Login</p>
            <button onClick={handleLoginWithGoogle} className='btn btn-secondary'>Login With Google</button>
        </div>
    );
};

export default SocialLogin;