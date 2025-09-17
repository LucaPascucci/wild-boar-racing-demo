// src/app/stint/service/delta-stint.worker.ts
addEventListener("message", ({ data }) => {
  const stints = data.stints;
  const deltaStints = createDeltaStints(stints);
  const totalDeltaMilliseconds = deltaStints.reduce((accumulator, currentValue) => accumulator + currentValue.delta, 0);
  const deltaMilliseconds = createDeltaStints(filterCompletedStints(stints)).reduce((accumulator, currentValue) => accumulator + currentValue.delta, 0);
  postMessage({
    deltaStints,
    totalDeltaMilliseconds,
    deltaMilliseconds
  });
});
function filterCompletedStints(stints) {
  return stints.filter((stint) => stint.endedAt !== null);
}
function createDeltaStints(stints) {
  const result = [];
  stints.forEach((stint) => {
    result.push(createDeltaStint(stint));
  });
  return result;
}
function createDeltaStint(stint) {
  const endDate = stint.endedAt ? stint.endedAt : /* @__PURE__ */ new Date();
  const timeOnTrack = endDate.getTime() - stint.startedAt.getTime();
  const delta = timeOnTrack - stint.optimizedMilliseconds;
  return {
    id: stint.id,
    delta,
    optimum: stint.optimizedMilliseconds,
    timeOnTrack
  };
}
//# sourceMappingURL=worker-IFAFNGC7.js.map
