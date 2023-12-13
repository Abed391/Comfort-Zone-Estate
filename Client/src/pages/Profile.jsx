import {useSelector} from 'react-redux';
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form className="flex flex-col"	>
        <img src={currentUser.avatar} alt="profile" className="w-24 h-24 rounded-full self-center object-cover cursor-pointer mt-2"/>
        <input type="text" placeholder="Username" id='username' className="border border-gray-300 p-2 rounded-lg my-2"></input>
        <input type="email" placeholder="email" id='email' className="border border-gray-300 p-2 rounded-lg my-2"></input>
        <input type="text" placeholder="password" id='password' className="border border-gray-300 p-2 rounded-lg my-2"></input>
        <button className='border border-gray-300 p-2 rounded-lg my-2 uppercase hover:opacity-95 disabled:opacity-80 bg-slate-700 text-white '>Update</button>
      </form>
      <div className="flex justify-between">
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
      </div>
  )
}
