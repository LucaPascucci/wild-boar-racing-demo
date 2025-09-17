// src/app/stint/service/stint.worker.ts
addEventListener("message", ({ data }) => {
  const stints = data.stints;
  const optimizedStint = data.optimizedStint;
  const lapConfig = data.lapConfig;
  const validTeamPaceLaps = data.validTeamPaceLaps;
  const referenceLapTimeMillisecond = lapConfig.referenceLapTimeMillisecond;
  let activeStint = getActiveStint(stints);
  let activeStintTimeOnTrack = calculateActiveStintTimeOnTrack(activeStint);
  let activeStintLaps = calculateActiveStintLaps(activeStintTimeOnTrack, referenceLapTimeMillisecond);
  let activeStintRemainingTimeOnTrack = calculateActiveStintRemainingTimeOnTrack(activeStintTimeOnTrack, optimizedStint);
  let activeStintRemainingLaps = calculateActiveStintRemainingLaps(activeStintLaps, optimizedStint);
  let activeStintGainedTimeOnTrack = calculateActiveStintGainedTimeOnTrack(activeStintTimeOnTrack, optimizedStint);
  let activeStintGainedLaps = calculateActiveStintGainedLaps(activeStintLaps, optimizedStint);
  let stintAVGMilliseconds = calculateStintAVGMilliseconds(stints);
  let stintPaceById = calculatePaceByStintId(validTeamPaceLaps);
  let stintBestLapById = getStintsBestLap(validTeamPaceLaps);
  postMessage({
    activeStint,
    activeStintTimeOnTrack,
    activeStintLaps,
    activeStintRemainingTimeOnTrack,
    activeStintRemainingLaps,
    activeStintGainedTimeOnTrack,
    activeStintGainedLaps,
    stintAVGMilliseconds,
    stintPaceById,
    stintBestLapById
  });
});
function getActiveStint(stints) {
  for (const stint of stints) {
    if (!stint.endedAt) {
      return stint;
    }
  }
  return void 0;
}
function calculateActiveStintTimeOnTrack(activeStint) {
  if (activeStint) {
    return (/* @__PURE__ */ new Date()).getTime() - activeStint.startedAt.getTime();
  }
  return 0;
}
function calculateActiveStintLaps(timeOnTrack, referenceLapTimeMillisecond) {
  if (timeOnTrack >= 0) {
    return Math.floor(timeOnTrack / referenceLapTimeMillisecond);
  }
  return 0;
}
function calculateActiveStintRemainingTimeOnTrack(timeOnTrack, optimizedStint) {
  if (timeOnTrack >= 0 && optimizedStint) {
    return optimizedStint.avgStintMillisecondsTime - timeOnTrack;
  }
  return 0;
}
function calculateActiveStintRemainingLaps(laps, optimizedStint) {
  let result = 0;
  if (laps >= 0 && optimizedStint) {
    result = optimizedStint.laps - laps;
  }
  return result > 0 ? result : 0;
}
function calculateActiveStintGainedTimeOnTrack(timeOnTrack, optimizedStint) {
  let result = 0;
  if (timeOnTrack >= 0 && optimizedStint) {
    result = optimizedStint.avgStintMillisecondsTime - timeOnTrack;
  }
  return result < 0 ? Math.abs(result) : 0;
}
function calculateActiveStintGainedLaps(laps, optimizedStint) {
  let result = 0;
  if (laps >= 0 && optimizedStint) {
    result = optimizedStint.laps - laps;
  }
  return result < 0 ? Math.abs(result) : 0;
}
function calculateStintAVGMilliseconds(stint) {
  const completedStints = stint.filter((stint2) => stint2.endedAt);
  if (completedStints.length === 0) {
    return 0;
  }
  const totalMilliseconds = completedStints.reduce((sum, stint2) => {
    return sum + (stint2.endedAt.getTime() - stint2.startedAt.getTime());
  }, 0);
  return Math.round(totalMilliseconds / completedStints.length);
}
function calculatePaceByStintId(validTeamPaceLaps) {
  const stintPaceMap = /* @__PURE__ */ new Map();
  const stintData = /* @__PURE__ */ new Map();
  for (const lap of validTeamPaceLaps) {
    const existing = stintData.get(lap.stintId);
    if (existing) {
      existing.totalMilliseconds += lap.lapMilliseconds;
      existing.lapCount++;
    } else {
      stintData.set(lap.stintId, {
        totalMilliseconds: lap.lapMilliseconds,
        lapCount: 1
      });
    }
  }
  for (const [stintId, data] of stintData) {
    if (data.lapCount > 0 && data.totalMilliseconds > 0) {
      const averagePace = Math.round(data.totalMilliseconds / data.lapCount);
      if (!isNaN(averagePace) && averagePace > 0) {
        stintPaceMap.set(stintId, averagePace);
      }
    }
  }
  return stintPaceMap;
}
function getStintsBestLap(validTeamPaceLaps) {
  const stintBestLapMap = /* @__PURE__ */ new Map();
  for (const lap of validTeamPaceLaps) {
    const existingBestLapMilliseconds = stintBestLapMap.get(lap.stintId);
    if (!existingBestLapMilliseconds || lap.lapMilliseconds < existingBestLapMilliseconds) {
      stintBestLapMap.set(lap.stintId, lap.lapMilliseconds);
    }
  }
  return stintBestLapMap;
}
//# sourceMappingURL=worker-XUDWCUPQ.js.map
