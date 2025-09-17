// src/app/race/service/race-position.worker.ts
addEventListener("message", ({ data }) => {
  const activeTeam = data.activeTeam;
  const lastLapNumberByRaceNumber = data.lastLapNumberByRaceNumber;
  const cumulatedTimeByRaceNumber = data.cumulatedTimeByRaceNumber;
  const racePositionByRaceNumber = calculateRacePositionByRaceNumber(lastLapNumberByRaceNumber, cumulatedTimeByRaceNumber);
  const teamRacePosition = getTeamRacePosition(racePositionByRaceNumber, activeTeam);
  let firstTeamRaceNumber = getFirstPositionRaceNumber(racePositionByRaceNumber);
  postMessage({
    racePositionByRaceNumber,
    teamRacePosition,
    firstTeamRaceNumber
  });
});
function calculateRacePositionByRaceNumber(lastLapNumberByRaceNumber, cumulatedTimeByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  const raceData = [];
  lastLapNumberByRaceNumber.forEach((lastLapNumber, raceNumber) => {
    const cumulatedTimes = cumulatedTimeByRaceNumber.get(raceNumber);
    if (cumulatedTimes && cumulatedTimes.length > 0) {
      const totalTime = cumulatedTimes[cumulatedTimes.length - 1];
      raceData.push({
        raceNumber,
        lastLapNumber,
        totalTime
      });
    }
  });
  raceData.sort((a, b) => {
    if (a.lastLapNumber !== b.lastLapNumber) {
      return b.lastLapNumber - a.lastLapNumber;
    }
    return a.totalTime - b.totalTime;
  });
  raceData.forEach((data, index) => {
    result.set(data.raceNumber, index + 1);
  });
  return result;
}
function getTeamRacePosition(racePositionByRaceNumber, activeTeam) {
  if (!activeTeam) {
    return void 0;
  }
  return racePositionByRaceNumber.get(activeTeam.raceNumber);
}
function getFirstPositionRaceNumber(racePositionByRaceNumber) {
  for (const [raceNumber, position] of racePositionByRaceNumber) {
    if (position === 1) {
      return raceNumber;
    }
  }
  return void 0;
}
//# sourceMappingURL=worker-WPIUQPBR.js.map
