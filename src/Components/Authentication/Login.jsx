import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const Login = () => {

  const { signin, signinGoogle, setLoginUser } = useContext(UserContext)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const f = e.target
    const email = f.email.value
    const password = f.password.value
    console.log(email, password)
    signin(email, password)
      .then(re => {
        console.log(re)
        setLoading(true)
      }).catch(e => {
        setLoading(false)
        setError(e.message)
      })
  }
  const signupWithPopup = () => {
    signinGoogle()
      .then((result) => {
        setError('');
        const user = result.user;
        setLoginUser(user)
      }).catch((error) => {
        setError(error.message);
      });
  }
  if (error) {
    toast.error(`${error}`, { position: 'top-center', autoClose: 1000 })
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input input-bordered w-full"
            required
          />
          <span className='text-sm text-right block mt-1 -mb-1 font-extralight'>forgot Password? <Link to='/forgot' className='hover:underline'>Don't Worry</Link></span>
        </div>
        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="divider">OR</div>
      <button onClick={signupWithPopup} className="btn w-full bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
        Login with Google
      </button>
      <p className="text-center text-gray-600 mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">sign up</Link>
      </p>
    </div>
  );
};

export default Login;