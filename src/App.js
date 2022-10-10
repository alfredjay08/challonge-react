import "./App.css";
import React from "react";
import { AsyncComponent } from "./components";

const Tournament = AsyncComponent(() => import("./pages/Tournament"));

export default function App() {
  return <Tournament />;
}
