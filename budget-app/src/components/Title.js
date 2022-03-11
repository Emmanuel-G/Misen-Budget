import { Link } from "react-router-dom";

const Title = ({ name }) => {
  return (
    <div className="page-title">
      <div>
        <h2> {name} </h2>
      </div>

      <Link to="/">
        <div className="page-title-close">X</div>
      </Link>
    </div>
  );
};

export default Title;
