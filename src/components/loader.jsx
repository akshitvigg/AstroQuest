import React from "react";

const Loader = () => {
  return (
    <div id="universe">
      <div id="galaxy">
        <div className="circle" />
        <div className="circle2" />
        <div className="circle3" />
        {[...Array(4)].map((_, i) => (
          <div key={i} id={`orbit${i}`}>
            <div id={`pos${i}`}>
              <div id={`dot${i}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
