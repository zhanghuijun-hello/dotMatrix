const data = [
	{ party: 'dem', isHoldover: true },
  { party: 'dem', isHoldover: false },
  { party: 'ind', isHoldover: false },
  { party: 'none', isHoldover: false },
  { party: 'gop', isHoldover: false },
  { party: 'gop', isHoldover: true },
  { party: 'dem', isHoldover: true },
  { party: 'dem', isHoldover: false },
  { party: 'ind', isHoldover: false },
  { party: 'none', isHoldover: false },
  { party: 'gop', isHoldover: true },
  { party: 'gop', isHoldover: true },
  { party: 'dem', isHoldover: false },
  { party: 'ind', isHoldover: false },
  { party: 'none', isHoldover: false },
  { party: 'gop', isHoldover: false },
  { party: 'gop', isHoldover: true },
  { party: 'gop', isHoldover: true },
]

const RADIUS = 10
const ROWS = 3
const COLUMNS = Math.ceil(data.length/ROWS)

const margin = { top: RADIUS, right: RADIUS, bottom: RADIUS, left: RADIUS }
const width = 400 - margin.left - margin.right
const height = width/2 - margin.top - margin.bottom

const x = d3.scalePoint()
	.range([0, width])
	.domain(d3.range(COLUMNS))

const y = d3.scalePoint()
	.range([height, 0])
	.domain(d3.range(ROWS))

const svg = d3.select('body').append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
	.append('g')
		.attr('transform', `translate(${margin.left}, ${margin.top})`)

const circle = svg.selectAll('circle')
		.data(data)
	.enter().append('circle')
		.attr('r', d => d.isHoldover ? RADIUS / 2 : RADIUS)
		.attr('cx', (d, i) => x(i % COLUMNS))
		.attr('cy', (d, i) => y(Math.floor(i / COLUMNS)))
		.attr('class', d => d.party)

