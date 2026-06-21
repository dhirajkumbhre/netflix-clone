import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await login(email, password);
    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
      nav("/browse");
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl mb-4">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 space-y-4"
      >
        <input
          className="p-3 rounded bg-gray-800"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-3 rounded bg-gray-800"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-red-600 py-3 rounded">Login</button>
      </form>
    </div>
  );
}