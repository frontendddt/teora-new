 
const PieChartSVG = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let cumulative = 0;

  const getCoordinates = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  const getPath = (value) => {
    const [startX, startY] = getCoordinates(cumulative / total);
    cumulative += value;
    const [endX, endY] = getCoordinates(cumulative / total);

    const largeArcFlag = value / total > 0.5 ? 1 : 0;

    return `
      M ${startX} ${startY}
      A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}
      L 0 0
    `;
  };

  const colors = [
    '#6f42c1',
    '#0dcaf0',
    '#fd7e14',
    '#20c997',
    '#dc3545',
    '#ffc107',
    '#198754'
  ];

  return (
    <div style={{ maxWidth: '200px', maxHeight: '200px', margin: '0 auto' }}>
      <svg viewBox="-1 -1 2 2" style={{ transform: 'rotate(-90deg)' }}>
        {data.map((slice, index) => (
          <path
            key={index}
            d={getPath(slice.value)}
            fill={colors[index % colors.length]}
            stroke="#fff"
            strokeWidth="0.01"
          />
        ))}
      </svg>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
        {data.map((slice, index) => (
          <li key={index} style={{ color: colors[index % colors.length], fontSize: '14px' }}>
            ● {slice.label}: {slice.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartSVG;
