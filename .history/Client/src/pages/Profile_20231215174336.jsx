import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [filePerc, setFilePerc] = useState(0);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: '', // Set an initial value for password
    avatar: currentUser.avatar,
  });

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData((prevData) => ({ ...prevData, avatar: downloadURL }));
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.username || !formData.email) {
      // Handle validation error, e.g., show an error message
      return;
    }

    try {
      dispatch(updateUserStart());

      const response = await fetch(`/api/users/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
      } else {
        dispatch(updateUserSuccess(data.user));
      }
    } catch (error) {
      console.error(error);
      dispatch(updateUserFailure("An error occurred during the update."));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="w-24 h-24 rounded-full self-center object-cover cursor-pointer"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700 ">
              Error Image Upload (Max 2MB){" "}
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700 ">
              {`Uploading ${filePerc}%`}
            </span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          id="username"
          defaultValue={currentUser.username}
          className="border p-2 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          defaultValue={currentUser.email}
          className="border p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border border-gray-300 p-2 rounded-lg my-2"
          onChange={handleChange}
        />
        <button className="border p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 bg-slate-700 text-white">
          Update
        </button>
      </form>
      <div className="flex justify-between">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
