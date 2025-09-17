// src/app/gap-simulator/service/gap-simulator.worker.ts
addEventListener("message", ({ data }) => {
  const lapSimulatorConfig = data.lapSimulatorConfig;
  const virtualLastCumulatedTimeByRaceNumber = data.virtualLastCumulatedTimeByRaceNumber;
  const referenceRaceNumber = lapSimulatorConfig.referenceRaceNumber;
  const virtualGapByRaceNumber = calculateVirtualGapByRaceNumber(
    referenceRaceNumber,
    virtualLastCumulatedTimeByRaceNumber
  );
  postMessage({
    virtualGapByRaceNumber
  });
});
function calculateVirtualGapByRaceNumber(referenceRaceNumber, virtualLastCumulatedTimeByRaceNumber) {
  const result = /* @__PURE__ */ new Map();
  const referenceTime = virtualLastCumulatedTimeByRaceNumber.get(referenceRaceNumber);
  if (referenceTime) {
    virtualLastCumulatedTimeByRaceNumber.forEach((lastCumulatedTime, raceNumber) => {
      if (referenceRaceNumber === raceNumber) {
        result.set(raceNumber, 0);
      } else {
        const gap = referenceTime - lastCumulatedTime;
        result.set(raceNumber, gap);
      }
    });
  }
  return result;
}
//# sourceMappingURL=worker-Q2CZCHNE.js.map
