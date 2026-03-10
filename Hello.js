import React, { createElement } from "react";

const Hello = () => {
    return React.createElement("div", {id : "abc", className : "xyz"}, createElement("h1", {id : "pqr"}, "Rishabh"));
}

export default Hello;