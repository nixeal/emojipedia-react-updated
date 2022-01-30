import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
          {emojipedia.map((emoji) => {
            return (
              <Entry
                key={emoji.id}
                emoji={emoji.emoji}
                name={emoji.name}
                meaning={emoji.meaning}
              />
            );
          })}
        </dl>
      </div>
    </React.Fragment>
  );
}

export default App;
