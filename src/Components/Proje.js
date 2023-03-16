import { useState } from "react";

function Proje(props) {
  const { data } = props;

  return (
    <div className="Proje_list">
      <h2>{data.name}</h2>
      <p>{data.explanation}</p>
      <div className="Tools_list">
        {data.tools.map((item, index) => (
          <h3 key={index}>{item} </h3>
        ))}
      </div>
      <div className="Linkler">
        <a href={data.gitHubPage} target="_blank">
          Wiev on GitHub
        </a>
        <a href={data.vercel} target="_blank">
          Go to App
        </a>
      </div>
      <img src={data.url} />
    </div>
  );
}

export default Proje;
