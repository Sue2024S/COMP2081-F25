function parsePercent(str) {
  const m = String(str).match(/([0-9]+(?:\.[0-9]+)?)/);
  return m ? Number(m[1]) : 0;
}

document.addEventListener('DOMContentLoaded', function () {
  const svg = document.getElementById('barSvg');
  const rect = document.getElementById('bar');   
  const pct = document.getElementById('pct');    

  const pctValue = parsePercent(pct.textContent);
  const clamped = Math.max(0, Math.min(100, pctValue)); // safety clamp
  const targetScale = clamped / 100;

  // Animate rect from 0 → % using transform: scaleX()
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Apply transform to start CSS transition
      rect.style.transform = `scaleX(${targetScale})`;
    });
  });


  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);

//   effect when active
  const activeScale = Math.min(1.12, targetScale * 1.03 + 0.02);

  styleEl.textContent = `
svg:active rect {
    transform: scaleX(${activeScale});
    transition-duration: 160ms;
    filter: drop-shadow(0 10px 24px rgba(0,0,0,0.55));
    }
  `.trim();
});
