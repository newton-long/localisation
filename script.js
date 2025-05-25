// INPUT: angle in degrees, distance in meters
const angleDeg = 45;        // 0 = straight, +45 = right, -45 = left
const distance = 3.2;       // meters, max 4

// SVG settings
const maxRadius = 4;       // meters
const svgWidth = 400;
const svgHeight = 200;
const pixelsPerMeter = svgWidth / (maxRadius * 2);  // 50px per meter

// Convert angle to radians
const angleRad = angleDeg * (Math.PI / 180);

// Convert polar to Cartesian (x, y)
const x = distance * Math.sin(angleRad);   // left/right
const y = distance * Math.cos(angleRad);   // distance forward

// Convert to SVG coordinates
const centerX = svgWidth / 2;
const centerY = svgHeight;

const svgX = centerX + x * pixelsPerMeter;
const svgY = centerY - y * pixelsPerMeter;

document.getElementById('dot').setAttribute('cx', svgX);
document.getElementById('dot').setAttribute('cy', svgY);
