import { useState } from "react";

const Doc = ({title, content}) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div
        className="content"
        style={{ overflowY: "scroll", width: "300px", height: "300px" }}
        onScroll={(e) => {
          if (
            e.target.scrollHeight - Math.floor(e.target.scrollTop) ===
              e.target.clientHeight ||
            e.target.scrollHeight - Math.ceil(e.target.scrollTop) ===
              e.target.clientHeight
          ) {
            setDisabled(false);
          }
        }}
      >
        {content}
      </div>
      <button disabled={disabled}>I Agree</button>
    </div>
  );
};

export default Doc;
