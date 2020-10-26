import React, { useState } from "react";
// import Team from "./team.json";
import TeamForm from "./TeamForm.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
const TeamDetail = () => {
  var Team = JSON.parse(localStorage.getItem("dataSource"));

  console.log(Team);
  return (
    <div>
      <div className="container mt-4">
        <Link
          to="/"
          className="btn-sm border mt-3 text-black-50 mb-3 d-inline-block"
        >
          Back to form
        </Link>
        <div className="card text-center mb-4">
          <div className="card-body">Dynamic "Dream 11" team generater</div>
        </div>
        <h6 className="d-flex align-items-center">
          Todays match is between :{" "}
          <span className="p-2 h5 mb-0">{Team && Team.TeamFirst}</span> and
          <span className="p-2 h5 mb-0"> {Team && Team.TeamSecond}</span>
        </h6>
        <div className="card text-center mb-4">
          <div className="card-body">
            <h6>Captain of the Team</h6>
            <h3>{Team && Team.captain}</h3>
          </div>
        </div>
        <div className="card text-center mb-4">
          <div className="card-body">
            <h6>Vice Captain of the Team</h6>
            <h3>{Team && Team.vcaptain}</h3>
          </div>
        </div>
        <h6>Other Team Player will be</h6>
        <ul className="list-inline">
          <li>{Team && Team.player3}</li>
          <li>{Team && Team.player4}</li>
          <li>{Team && Team.player5}</li>
          <li>{Team && Team.player6}</li>
          <li>{Team && Team.player7}</li>
          <li>{Team && Team.player8}</li>
          <li>{Team && Team.player9}</li>
          <li>{Team && Team.player10}</li>
          <li>{Team && Team.player11}</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamDetail;
