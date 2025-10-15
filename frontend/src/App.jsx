import React from "react";
import { Outlet } from "react-router-dom"; // Acts as a placeholder for nested route
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";  // To display toast notifications in your app.
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
};

export default App;
