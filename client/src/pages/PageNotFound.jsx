import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>PageNotFound</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default PageNotFound;
