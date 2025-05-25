// Wait for TagoIO to inject payload
window.addEventListener("load", () => {
  // Grab variables from payload array
  const angleVar = payload.find((v) => v.variable === "angle");
  const distanceVar = payload.find((v) => v.variable === "distance");

  if (!angleVar || !distanceVar) {
    console.warn("Angle or distance data missing in payload.");
    return;
  }

  const angleDeg = parseFloat(angleVar.value);      // e.g. 45
  const distance = parseFloat(distanceVar.value);   // e.g. 3.2

  // ---- SVG radar config ----
  const svgWidth = 400;
  const svgHeight = 200;
  const maxRadius = 4; // meters
  const pixelsPerMeter = svgWidth / (maxRadius * 2); // 50px/m

  // Convert polar to Cartesian
  const angleRad = angleDeg * (Math.PI / 180);
  const x = distance * Math.sin(angleRad);
  const y = distance * Math.cos(angleRad);

  const centerX = svgWidth / 2;
  const centerY = svgHeight;

  const svgX = centerX + x * pixelsPerMeter;
  const svgY = centerY - y * pixelsPerMeter;

  // Place the dot
  const dot = document.getElementById("dot");
  dot.setAttribute("cx", svgX);
  dot.setAttribute("cy", svgY);
});
