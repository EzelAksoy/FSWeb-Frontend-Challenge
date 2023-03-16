import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function FirstInformation() {
  const veri = useSelector((state) => state.firstInfo);
  return (
    <div className="Information_div">
      <div className="Information_Parag">
        <h2>{veri.greeting}</h2>
        <p>{veri.introParagph}</p>
        <div className="Yuvarlak"></div>
        <div className="Çizgi"></div>
        <div className="paragraf">
          <a
            href="https://www.linkedin.com/in/ramazan-ezel-aksoy-04b33a106/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ fontSize: "2rem", margin: "2rem 0" }}
            />
          </a>
          <a href="https://github.com/EzelAksoy" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "2rem", margin: "2rem 1rem" }}
            />
          </a>
          <p>
            Currently <span style={{ color: "#AF0C48" }}>Freelancing</span> for{" "}
            <span style={{ color: "#AF0C48" }}>UX,UI & Web Design</span>{" "}
            Project.
          </p>
          <p>Invite me to join team please click link </p>
          <a
            href="mailto:aksoy.ezel@gmail.com"
            style={{
              fontSize: "1.25rem",
              fontFamily: "cursive",
              margin: "2rem",
              color: "GrayText",
            }}
          >
            {veri.email}
          </a>
        </div>
      </div>
      <div className="Information_Photo">
        {" "}
        <img src={veri.photo} />
        <div className="Kare"></div>
      </div>
    </div>
  );
}

export default FirstInformation;
