import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { UserContext } from "../Context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase";

const Header = () => {
  const { loginUser, setLoginUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    signOut(auth).then(() => {
      setLoginUser(null);
    });
  };

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-blue-600 text-lg">
        Home
      </NavLink>
    </>
  );

  const authLinks = loginUser ? (
    <>
      <div className="flex items-center gap-3">
        <Link to="/my-profile" className="avatar">
          <div className="w-10 rounded-full ring-2 ring-offset-2 ring-primary">
            <img
              src={
                loginUser?.photoURL ||
                "https://static.vecteezy.com/system/resources/previews/001/840/612/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
              }
              alt="User"
            />
          </div>
        </Link>
        <button
          onClick={logout}
          className="btn btn-outline btn-warning text-black"
        >
          Log Out
        </button>
      </div>
    </>
  ) : (
    <div className="flex gap-2">
      <Link to="/signin" className="btn text-lg hover:text-blue-600">
        Sign In
      </Link>
      <Link to="/signup" className="btn text-lg hover:text-blue-600">
        Sign Up
      </Link>
    </div>
  );

  return (
    <nav className="bg-white shadow-md text-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
    
        <Link to="/" className="text-2xl uppercase font-bold text-blue-600">
          Job Track
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks}
          {authLinks}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2">
          <div className="flex flex-col gap-2">
            {navLinks}
            {loginUser ? (
              <>
                <Link
                  to="/my-profile"
                  className="flex items-center gap-3 hover:text-blue-600"
                >
                  <div className="avatar">
                    <div className="w-10 rounded-full ring-2 ring-offset-2 ring-primary">
                      <img
                        src={
                          loginUser?.photoURL ||
                          "https://static.vecteezy.com/system/resources/previews/001/840/612/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                        }
                        alt="User"
                      />
                    </div>
                  </div>
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="btn btn-outline btn-warning text-black w-full"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/signin" className="btn w-full text-left">
                  Sign In
                </Link>
                <Link to="/signup" className="btn w-full text-left">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
