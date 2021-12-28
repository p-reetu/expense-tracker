import "./ChartBar.css";

export default function ChartBar(props) {
  let fillHeight = "0%";
  if (props.max > 0) {
    fillHeight = Math.round((props.val / props.max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
