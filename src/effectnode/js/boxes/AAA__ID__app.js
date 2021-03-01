/*
BoxScripts[box.moduleName].box({
  resources,
  domElement: mounter,
  pulse,
  inputAt,
  log: (v) => {
    console.log(JSON.stringify(v, null, 4));
  },
  graph: lowdb,
});
*/

import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function MyComponent({ relay, pageAt }) {
  const [page, setPage] = useState([]);

  useEffect(() => {
    relay.box.inputs.map((e, idx) => {
      return relay.stream(idx, ({ type, Component, href }) => {
        if (type === "page") {
          if (href === pageAt) {
            setPage(<Component></Component>);
          }
        }
      });
    });
  });

  return page && page;
}

export const box = ({ domElement, pageAt, ...relay }) => {
  ReactDOM.render(
    <MyComponent pageAt={pageAt} relay={relay}></MyComponent>,
    domElement
  );
};
