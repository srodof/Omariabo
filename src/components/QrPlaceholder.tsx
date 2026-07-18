// Grafismo decorativo tipo QR — NO es un código funcional/escaneable.
const N = 15
const CELL = 100 / N

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    return s / 0x7fffffff
  }
}

function finderCells(gx: number, gy: number) {
  const cells = new Set<string>()
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 7; y++) {
      const edge = x === 0 || x === 6 || y === 0 || y === 6
      const core = x >= 2 && x <= 4 && y >= 2 && y <= 4
      if (edge || core) cells.add(`${gx + x},${gy + y}`)
    }
  }
  return cells
}

const fixed = new Set([...finderCells(0, 0), ...finderCells(N - 7, 0), ...finderCells(0, N - 7)])
const rand = seededRandom(7)
const rects: { x: number; y: number }[] = []
for (let gx = 0; gx < N; gx++) {
  for (let gy = 0; gy < N; gy++) {
    const key = `${gx},${gy}`
    if (fixed.has(key) || rand() < 0.42) rects.push({ x: gx, y: gy })
  }
}

export default function QrPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" fill="#231f1a" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder de código QR">
      {rects.map(({ x, y }, i) => (
        <rect key={i} x={x * CELL} y={y * CELL} width={CELL} height={CELL} />
      ))}
    </svg>
  )
}
