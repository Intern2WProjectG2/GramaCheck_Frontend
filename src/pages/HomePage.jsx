import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"
import { CardPage } from "./CardPage.jsx";

export const HomePage = () => {
  const history = useHistory();
  return (
    <>
      <div style={{ marginTop: "50px", justifySelf: "center" }}>
        <CardPage />
      </div>
      <div style={{ marginTop: "50px" }}>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <button
              className="homeBtn"
              style={{ borderRadius: "50%", width: "50px", height: "50px", marginRight: "10px", fontSize: "20px", fontWeight: "bold" }}
              onClick={() => {

              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#002244";
                e.target.style.border = "1px solid #002244";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#002244";
                e.target.style.color = "white";
              }}
            >
              ?
            </button>
          </ul>
        </nav>
      </div>


    </>
  );
}
