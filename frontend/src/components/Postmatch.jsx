import { useEffect, useState } from "react";
import { gql, useSubscription } from "@apollo/client";
import "./Postmatch.css";

const DASHBOARD_SUBSCRIPTION = gql`
  subscription OnDashboardUpdate {
    dashboardUpdate {
     AddMatch
     AddTeam
     Alliance
     Division
     Field
     ID
     LinkMatch
     LinkTM
     Match
     MatchScore
     MatchStatus
     RemoveMatch
     Score
     String
     TM
     Team
     UnlinkMatch
     UnlinkTM
     UpdateTM
    }
  }
`;

const Dashboard = () => {
  const [scoreMidpointCurrent, setScoreMidpointCurrent] = useState(50);
  const [scoreMidpointSetpoint, setScoreMidpointSetpoint] = useState(50);
  const coeffP = 0.1;

  const { data, error } = useSubscription(DASHBOARD_SUBSCRIPTION, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      const {
        scoreRed,
        scoreBlue,
      } = data.dashboardUpdate;
      setScoreMidpointSetpoint(
        ((scoreRed + 1) / (scoreRed + scoreBlue + 2)) * 100
      );
    }
  }, [data]);

  useEffect(() => {
    const animationTimer = setInterval(() => {
      const delta = scoreMidpointSetpoint - scoreMidpointCurrent;
      setScoreMidpointCurrent((prev) => prev + delta * coeffP);
    }, 10);

    return () => clearInterval(animationTimer);
  }, [scoreMidpointCurrent, scoreMidpointSetpoint]);

  if (error) return <p>Error loading data...</p>;
  if (!data) return <p>Loading...</p>;

  const {
    displayState,
    displayName,
    displayClass,
    sponsorState,
    scoreRed,
    scoreBlue,
    teamsRed,
    teamsBlue,
    timer,
  } = data.dashboardUpdate;

  return (
    <div className={displayClass}>
      {displayState === "init" && <div className="banner"></div>}
      {displayState === "timer" && (
        <div className="score-grid">
          <p id="red-name">Mecha Mayhem 2024</p>
          <p id="blue-name">{displayName}</p>
          <p id="timer">{timer}</p>
          <p id="score-red">{scoreRed}</p>
          <p id="score-blue">{scoreBlue}</p>
          <div className="teams" id="teams-red">
            {teamsRed.map((team) => (
              <p key={team}>{team}</p>
            ))}
          </div>
          <div className="teams" id="teams-blue">
            {teamsBlue.map((team) => (
              <p key={team}>{team}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;