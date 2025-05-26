import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../FireBase/firebase";
import { toast } from "react-toastify";

const Profile = () => {
  const { loginUser } = useContext(UserContext)
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const f = e.target;
    const nam = f.name.value
    const url = f.photoUrl.value
    const updateDetails = {
      displayName: nam,
      photoURL: url
    }

    if (loginUser?.displayName === nam || loginUser?.photoURL === url) {
      return toast.warning('Please change for update', { position: 'top-center', autoClose: 1000 })
    }
    updateProfile(auth.currentUser, updateDetails)
      .then(() => {
        toast.success('Update Successfully', { position: 'top-center', autoClose: 1000 })
      }).catch((error) => {
        setMessage(error.message)
      });
  };

  if (message) {
    toast.error('Update Error')
  }



  return (

    <div className="max-w-sm my-12 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={loginUser?.photoURL || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1748275602~exp=1748279202~hmac=bb06dc6913b2a7fe33419b8469b44e9ca61985304cfa438d88a3c979670698f7&w=740"}
          alt="User Avatar"
          className="w-36 h-36 rounded-full object-cover"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">{loginUser?.displayName || "No Name"}</h2>
        <p className="text-gray-600">Email:{loginUser?.email}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <h2 className="text-xl lg:text-3xl font-bold underline pb-1 text-center">Update Info</h2>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue={loginUser?.displayName}
            type="text"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="photoUrl" className="block mb-1 font-medium text-gray-700">
            Photo URL
          </label>
          <input
            required
            id="photoUrl"
            name="photoUrl"
            defaultValue={loginUser?.photoURL}
            type="text"
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Profile
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-green-600">
          {message}
        </p>
      )}
    </div>
  );
};

export default Profile;
