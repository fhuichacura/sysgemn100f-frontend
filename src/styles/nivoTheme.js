// src/styles/nivoTheme.js
export const darkNivoTheme = {
  background: "#121826",
  textColor: "#FFFFFF",
  fontSize: 12,
  axis: {
    domain: { line: { stroke: "#777777" } },
    legend: { text: { fill: "#ffffff" } },
    ticks: {
      line: { stroke: "#777777", strokeWidth: 1 },
      text: { fill: "#ffffff" },
    },
  },
  grid: {
    line: { stroke: "#444", strokeDasharray: "4 4" },
  },
  tooltip: {
    container: {
      background: "#1E2533",
      color: "#ffffff",
      fontSize: 12,
    },
  },
  legends: {
    text: { fill: "#ffffff" },
  },
};