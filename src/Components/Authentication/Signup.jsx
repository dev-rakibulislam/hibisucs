import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const { signUpEmailAndPass, signinGoogle, setLogin, setLoginUser } = useContext(UserContext);
  const [error, setError] = useState('')
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    const email = f.email.value;
    const name = f.name.value;
    const password = f.password.value;

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!isLongEnough) {
      toast.warning("❌ Password must be at least 6 characters long.");
      return;
    } else if (!hasUppercase) {
      toast.warning("❌ Password must include at least one uppercase letter.");
      return;
    } else if (!hasLowercase) {
      toast.warning("❌ Password must include at least one lowercase letter.");
      return;
    }

    const toastId = toast.loading("Signing you up...", { position: 'top-center' });

    try {
      const userCredential = await signUpEmailAndPass(email, password, name);
      console.log(userCredential)
      setLoginUser(userCredential.user);
      setLogin(true);
      toast.update(toastId, {
        render: "success to create user",
        type: "success",
        isLoading: false,
        autoClose: 2000
      })
      setTimeout(() => {
        navigate('/my-profile')
      }, 2300);
    } catch (err) {
      toast.update(toastId, {
        render: `❌ ${err.message || "Signup failed"}`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="flex border rounded-md">
              <input
                type={toggle ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 focus:outline-none"
              />
              <span onClick={() => setToggle(!toggle)} className="btn right-0 cursor-pointer px-2">
                {toggle ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="divider">OR</div>
        <button onClick={signupWithPopup} className="btn w-full bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
