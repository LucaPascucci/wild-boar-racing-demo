// src/app/gap/service/gap.worker.ts
addEventListener("message", ({ data }) => {
  const lastLapNumberByRaceNumber = data.lastLapNumberByRaceNumber;
  const cumulatedTimeByRaceNumber = data.cumulatedTimeByRaceNumber;
  const racePositionByRaceNumber = data.racePositionByRaceNumber;
  const activeTeam = data.activeTeam;
  const gapAheadMilliseconds = calculateGapAheadMilliseconds(
    racePositionByRaceNumber,
    activeTeam ? activeTeam.raceNumber : void 0,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber
  );
  const gapBehindMilliseconds = calculateGapBehindMilliseconds(
    racePositionByRaceNumber,
    activeTeam ? activeTeam.raceNumber : void 0,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber
  );
  postMessage({
    gapAheadMilliseconds,
    gapBehindMilliseconds
  });
});
function calculateGapAheadMilliseconds(racePositionByRaceNumber, referenceRaceNumber, cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber) {
  if (!referenceRaceNumber) {
    return void 0;
  }
  const referenceRaceNumberPosition = racePositionByRaceNumber.get(referenceRaceNumber);
  if (!referenceRaceNumberPosition || referenceRaceNumberPosition === 1) {
    return void 0;
  }
  let teamAheadRaceNumber;
  for (const [raceNumber, position] of racePositionByRaceNumber) {
    if (position === referenceRaceNumberPosition - 1) {
      teamAheadRaceNumber = raceNumber;
      break;
    }
  }
  return getGapAheadFromTeams(
    referenceRaceNumber,
    teamAheadRaceNumber,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber
  );
}
function calculateGapBehindMilliseconds(racePositionByRaceNumber, referenceRaceNumber, cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber) {
  if (!referenceRaceNumber) {
    return;
  }
  const referenceRaceNumberPosition = racePositionByRaceNumber.get(referenceRaceNumber);
  if (!referenceRaceNumberPosition || referenceRaceNumberPosition === racePositionByRaceNumber.size) {
    return void 0;
  }
  let teamBehindRaceNumber;
  for (const [raceNumber, position] of racePositionByRaceNumber) {
    if (position === referenceRaceNumberPosition + 1) {
      teamBehindRaceNumber = raceNumber;
      break;
    }
  }
  if (!teamBehindRaceNumber) {
    return void 0;
  }
  return getGapBehindFromTeams(
    referenceRaceNumber,
    teamBehindRaceNumber,
    cumulatedTimeByRaceNumber,
    lastLapNumberByRaceNumber
  );
}
function getGapAheadFromTeams(referenceTeamRaceNumber, aheadTeamRaceNumber, cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber) {
  if (!referenceTeamRaceNumber || !aheadTeamRaceNumber) {
    return void 0;
  }
  const activeTeamLastLapNumber = lastLapNumberByRaceNumber.get(referenceTeamRaceNumber);
  const teamAheadLastLapNumber = lastLapNumberByRaceNumber.get(aheadTeamRaceNumber);
  if (!activeTeamLastLapNumber || !teamAheadLastLapNumber) {
    return void 0;
  }
  const activeTeamCumulatedTimes = cumulatedTimeByRaceNumber.get(referenceTeamRaceNumber);
  const teamAheadCumulatedTimes = cumulatedTimeByRaceNumber.get(aheadTeamRaceNumber);
  if (!activeTeamCumulatedTimes || !teamAheadCumulatedTimes) {
    return void 0;
  }
  if (activeTeamLastLapNumber === teamAheadLastLapNumber) {
    const activeTeamTime = activeTeamCumulatedTimes[activeTeamCumulatedTimes.length - 1];
    const teamAheadTime = teamAheadCumulatedTimes[teamAheadCumulatedTimes.length - 1];
    return activeTeamTime - teamAheadTime;
  }
  if (teamAheadLastLapNumber > activeTeamLastLapNumber) {
    const activeTeamTime = activeTeamCumulatedTimes[activeTeamCumulatedTimes.length - 1];
    const teamAheadTimeAtSameLap = teamAheadCumulatedTimes[activeTeamLastLapNumber - 1];
    if (teamAheadTimeAtSameLap !== void 0) {
      return activeTeamTime - teamAheadTimeAtSameLap;
    }
  }
  return void 0;
}
function getGapBehindFromTeams(referenceTeamRaceNumber, behindTeamRaceNumber, cumulatedTimeByRaceNumber, lastLapNumberByRaceNumber) {
  if (!referenceTeamRaceNumber || !behindTeamRaceNumber) {
    return void 0;
  }
  const activeTeamLastLapNumber = lastLapNumberByRaceNumber.get(referenceTeamRaceNumber);
  const behindTeamLastLapNumber = lastLapNumberByRaceNumber.get(behindTeamRaceNumber);
  if (!activeTeamLastLapNumber || !behindTeamLastLapNumber) {
    return void 0;
  }
  const activeTeamCumulatedTimes = cumulatedTimeByRaceNumber.get(referenceTeamRaceNumber);
  const behindTeamCumulatedTimes = cumulatedTimeByRaceNumber.get(behindTeamRaceNumber);
  if (!activeTeamCumulatedTimes || !behindTeamCumulatedTimes) {
    return void 0;
  }
  if (activeTeamLastLapNumber === behindTeamLastLapNumber) {
    const activeTeamTime = activeTeamCumulatedTimes[activeTeamCumulatedTimes.length - 1];
    const teamBehindTime = behindTeamCumulatedTimes[behindTeamCumulatedTimes.length - 1];
    return activeTeamTime - teamBehindTime;
  }
  if (activeTeamLastLapNumber > behindTeamLastLapNumber) {
    const teamBehindTime = behindTeamCumulatedTimes[behindTeamCumulatedTimes.length - 1];
    const activeTeamTimeAtSameLap = activeTeamCumulatedTimes[behindTeamLastLapNumber - 1];
    if (activeTeamTimeAtSameLap !== void 0) {
      return activeTeamTimeAtSameLap - teamBehindTime;
    }
  }
  return void 0;
}
//# sourceMappingURL=worker-2ABMGWDI.js.map
