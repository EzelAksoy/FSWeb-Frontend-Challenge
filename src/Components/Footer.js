import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const message = useSelector((state) => state.foot);
  return (
    <div className="Footer">
      <h2>{message.paragraph}</h2>
      <Link to="/Form">
        <p>Click me</p>
      </Link>
    </div>
  );
}

export default Footer;
