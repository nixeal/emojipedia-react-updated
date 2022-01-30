import React from "react";
const Entry = ({ emoji, name, meaning }) => {
  return (
    <React.Fragment>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span>{name}</span>
        </dt>
        <dd>{meaning}</dd>
      </div>
    </React.Fragment>
  );
};
export default Entry;
