import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import Header from "../../components/header/Header";

function PublishPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
      //console.log("This will run after 1 second!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Header />
      <div className="publish">
        <h1 className="publish_header">
          Yet you still clicked on it. Mission accomplished.
        </h1>
      </div>
    </div>
  );
}
export default PublishPage;
