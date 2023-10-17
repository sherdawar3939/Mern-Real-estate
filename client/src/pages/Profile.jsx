import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center py-7 font-semibold">Profile</h1>

      <form className="flex flex-col gap-4">
        <img src={user.currentUser.avatar} className="self-center rounded-full" />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-95" >Update Profile </button>
      </form>
      <div className="flex justify-between mt-5 cursor-pointer">
        <span className="text-red-500">Delete account</span>
        <span className="text-red-500">Sign In</span>
      </div>
    </div>
  );
}
