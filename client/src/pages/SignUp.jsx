import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl p-3 text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="username"
          id="username"
        ></input>
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="email"
          id="email"
        ></input>
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="password"
          id="password"
        ></input>
        <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80 uppercase">
          Sign Up
        </button>
      </form>
      <div className="flex m-3 gap-2">
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-sky-600">
          Sign in
        </Link>
      </div>
    </div>
  );
}
