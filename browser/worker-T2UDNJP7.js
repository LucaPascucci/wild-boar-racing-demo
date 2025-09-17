// src/app/lap-missing/service/lap-missing.worker.ts
addEventListener("message", ({ data }) => {
  const lapMissing = data.lapMissing;
  const lapMissingByRaceNumber = getLapMissingByRaceNumber(lapMissing);
  const lapMissingCount = lapMissing.length;
  postMessage({
    lapMissingByRaceNumber,
    lapMissingCount
  });
});
function getLapMissingByRaceNumber(lapMissing) {
  const result = /* @__PURE__ */ new Map();
  lapMissing.forEach((lap) => {
    const raceNumber = lap.raceNumber;
    if (result.has(raceNumber)) {
      result.get(raceNumber)?.push(lap.lapNumber);
    } else {
      result.set(raceNumber, [lap.lapNumber]);
    }
  });
  return result;
}
//# sourceMappingURL=worker-T2UDNJP7.js.map
