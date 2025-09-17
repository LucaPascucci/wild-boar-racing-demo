// src/app/team/service/team.worker.ts
addEventListener("message", ({ data }) => {
  const teams = data.teams;
  const activeTeam = teams.find((team) => team.yourTeam);
  const teamNameByRaceNumber = new Map(teams.map((team) => [team.raceNumber, team.name]));
  const gapChartVisibleByRaceNumber = new Map(teams.map((team) => [team.raceNumber, team.gapChartVisible]));
  const shadowChartVisibleByRaceNumber = new Map(teams.map((team) => [team.raceNumber, team.shadowChartVisible]));
  const pitNowChartVisibleByRaceNumber = new Map(teams.map((team) => [team.raceNumber, team.pitNowChartVisible]));
  postMessage({
    activeTeam,
    teamNameByRaceNumber,
    gapChartVisibleByRaceNumber,
    shadowChartVisibleByRaceNumber,
    pitNowChartVisibleByRaceNumber
  });
});
//# sourceMappingURL=worker-GOYRML6F.js.map
