import React from "react";
import "./style.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 207) +
    "<span style='color:var(--blue)' > Read More...</span>";
  const fullDesc =
    desc + "<span style='color:var(--blue)' > Read Less</span>";
  const [description, setDescription] = React.useState(false);

  return (
    <div className="coin_wrapper">
      <h2 className="coin_info_heading">{heading}</h2>
      <p
        onClick={() => setDescription(!description)}
        className="coin_info_desc"
        dangerouslySetInnerHTML={{ __html: description ? fullDesc : shortDesc }}
      />
    </div>
  );
}

export default CoinInfo;
