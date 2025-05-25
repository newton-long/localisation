// Replace this with real data logic later
const x = 2.0; // meters
const y = 1.5;

const centerX = 150;
const centerY = 150;
const scale = 30; // 1 meter = 30 pixels

const dot = document.getElementById("dot");
dot.setAttribute("cx", centerX + x * scale);
dot.setAttribute("cy", centerY - y * scale);
