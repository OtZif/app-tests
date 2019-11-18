import React from "react";

import "./autorisation.scss";

const Autorisation = () => {
  return (
    <div className="autorisation">
      <form className="autorisation--form">
        <input type="text" placeholder="login" />
        <input type="password" placeholder="password" />
        <button>log in</button>
      </form>
    </div>
  );
};

export default Autorisation;
