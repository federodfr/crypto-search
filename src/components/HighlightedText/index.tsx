import React from "react";

import "./styles.css";

interface Props {
  highlight: string;
  value: string;
}
//TO DO: Check highlight text only on init of
const HighlightedText: React.FC<Props> = ({ highlight, value }) => {
  const splittedName: Array<string> = value.split(
    new RegExp(`(${highlight})`, "gi")
  );

  const getHighlightedText = () => {
    const highlightedText = splittedName.map((split: string, index: number) => {
      return split.toLowerCase() === highlight.toLowerCase() ? (
        <b key={index}>{split}</b>
      ) : (
        <span key={index}>{split}</span>
      );
    });
    return highlightedText;
  };

  return <div className="highlight-text">{getHighlightedText()}</div>;
};

export default HighlightedText;
