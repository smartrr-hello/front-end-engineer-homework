import PropTypes from "prop-types";
import React from "react";

import "./EmojiResultRow.css";

const EmojiResultRow = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(symbol);
  };

  return (
    <li className="component-emoji-result-row copy-to-clipboard list-group-item d-flex align-items-center justify-content-between" onClick={handleCopyToClipboard}>
      <div>
        <img alt={title} src={src} className="pe-2" />
        <span className="title">{title}</span>
      </div>
      <span className="info">Click to copy emoji</span>
    </li>
  );
};

EmojiResultRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};

export default EmojiResultRow;
