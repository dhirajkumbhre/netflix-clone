import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-black/70 fixed w-full">
      <h1 className="text-red-600 font-bold text-3xl">StreamFlix</h1>

      <div className="space-x-4">
        <Link to="/browse">Home</Link>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}