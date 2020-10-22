import React, { useState } from "react";
import Team from "./team.json";
const TeamDetail = () => {
  return (
    <div>
      <div class="container mt-4">
        <div class="card text-center mb-4">
          <div class="card-body">Dynamic "Dream 11" team generater</div>
        </div>
        <h6 class="d-flex align-items-center">
          Todays match is between :{" "}
          <span class="p-2 h5 mb-0">{Team.TeamFirst}</span> and
          <span class="p-2 h5 mb-0"> {Team.TeamSecond}</span>
        </h6>
        <div class="card text-center mb-4">
          <div class="card-body">
            <h6>Captain of the Team</h6>
            <h3>{Team.captain}</h3>
          </div>
        </div>
        <div class="card text-center mb-4">
          <div class="card-body">
            <h6>Vice Captain of the Team</h6>
            <h3>{Team.vcaptain}</h3>
          </div>
        </div>
        <h4>Other Team Player will be</h4>
        <ul class="list-inline">
          <li>{Team.player3}</li>
          <li>{Team.player4}</li>
          <li>{Team.player5}</li>
          <li>{Team.player6}</li>
          <li>{Team.player7}</li>
          <li>{Team.player8}</li>
          <li>{Team.player9}</li>
          <li>{Team.player10}</li>
          <li>{Team.player11}</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamDetail;
