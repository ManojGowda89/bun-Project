import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy,Suspense } from "react";


function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense><Home /></Suspense>,
  },
  {
    path: "/about",

    element:<Suspense><About /></Suspense>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
