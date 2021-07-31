import React from "react";

import "./style.scss";

export default function ArtigoContent(props) {
  return (
    <div className="card-form">
      <header className="title">
        <h1>{props.title}</h1>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
