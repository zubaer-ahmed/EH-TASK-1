import { Link, Routes, Route, useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-4xl font-bold">404 Page Not Found</div>
      <button
        className="bg-blue-500 rounded text-white px-4 py-2 mt-2"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button
        className="bg-blue-500 rounded text-white px-4 py-2 mt-2"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};
