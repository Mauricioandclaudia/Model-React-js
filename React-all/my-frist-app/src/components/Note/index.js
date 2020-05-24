import React from "react";

//css
import "./Note.css";

function Note({ title, content }) {
  return (
    <div className="note">
      <p>
        <strong>{title}</strong>
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Note;
