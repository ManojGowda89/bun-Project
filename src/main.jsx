import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";
const elem = document.getElementById("root");
const app = <App />;

// Simple render (no TS, no hot reload logic)
createRoot(elem).render(app);
