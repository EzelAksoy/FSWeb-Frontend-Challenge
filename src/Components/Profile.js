import { useSelector } from "react-redux";
import styled from "styled-components";
import PersonelInfo from "./PersonelInfo";
import PersonelValue from "./PersonelValue";
import PersonelAbout from "./PersonelAbout";

function Profile() {
  const SC_p = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3.6rem;
    letter-spacing: 0.01em;
    color: #0a0a14;
    margin: 0rem auto 0rem auto;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 3rem;
  `;
  const personelInfo = useSelector((state) => state.basicInfoKey);
  const personelValue = useSelector((state) => state.basicInfoValue);
  const personelAbout = useSelector((state) => state.about);

  return (
    <div className="Profile">
      <SC_p>Profile</SC_p>
      <div className="Main_About">
        <div className="Ana_Info">
          <h2>Basic Information</h2>
          <div className="Info">
            <div className="Info_Key">
              {personelInfo.map((item, index) => (
                <PersonelInfo data={item} key={index} />
              ))}
            </div>
            <div className="Info_Value">
              {personelValue.map((item, index) => (
                <PersonelValue valueData={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="About_Info">
          <h3>About me</h3>
          <div className="Çizgi_About"></div>
          <div className="About">
            {personelAbout.map((item, index) => (
              <PersonelAbout aboutData={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
