// src/app/race-simulator/service/race-simulator.worker.ts
addEventListener("message", ({ data }) => {
  const virtualLastCumulatedTimeByRaceNumber = data.virtualLastCumulatedTimeByRaceNumber;
  const remainingPitTimeMillisecondsByRaceNumber = data.remainingPitTimeMillisecondsByRaceNumber;
  const virtualRacePositionByRaceNumber = calculateVirtualRacePositionByRaceNumber(
    virtualLastCumulatedTimeByRaceNumber,
    remainingPitTimeMillisecondsByRaceNumber
  );
  postMessage({
    virtualRacePositionByRaceNumber
  });
});
function calculateVirtualRacePositionByRaceNumber(virtualLastCumulatedTimeByRaceNumber, remainingPitTimeMillisecondsByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  const raceNumbers = Array.from(virtualLastCumulatedTimeByRaceNumber.keys());
  const totalVirtualTimeByRaceNumber = /* @__PURE__ */ new Map();
  for (const raceNumber of raceNumbers) {
    const virtualLastCumulatedTime = virtualLastCumulatedTimeByRaceNumber.get(raceNumber);
    const remainingPitTimeMilliseconds = remainingPitTimeMillisecondsByRaceNumber.get(raceNumber) || 0;
    if (virtualLastCumulatedTime) {
      totalVirtualTimeByRaceNumber.set(raceNumber, virtualLastCumulatedTime + remainingPitTimeMilliseconds);
    }
  }
  const sortedRaceNumbers = Array.from(totalVirtualTimeByRaceNumber.entries()).sort(([, timeA], [, timeB]) => timeA - timeB).map(([raceNumber]) => raceNumber);
  sortedRaceNumbers.forEach((raceNumber, index) => {
    result.set(raceNumber, index + 1);
  });
  return result;
}
//# sourceMappingURL=worker-3UVECWI6.js.map
