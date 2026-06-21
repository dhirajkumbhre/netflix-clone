import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-40 m-2 cursor-pointer">
        <img
          src={movie.poster}
          className="rounded shadow-lg hover:scale-105 duration-200"
        />
      </div>
    </Link>
  );
}