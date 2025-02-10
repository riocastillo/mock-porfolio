import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
const domNode = document.getElementById('root');

if (!domNode) {
  throw new Error('No element with id `root` found');
}

const root = createRoot(domNode);
root.render(<App />);
