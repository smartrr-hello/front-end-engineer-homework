import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-center component-header">
      <img
        className="mx-3"
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="32"
        height="32"
        alt=""
      />
      <h1>Emoji Search</h1>
      <img
        className="mx-3"
        src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
        width="32"
        height="32"
        alt=""
      />
    </header>
  );
};

export default Header;
