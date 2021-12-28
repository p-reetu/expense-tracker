import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((data) => data.value);
  const maxValue = Math.max(...dataPointsValue);
  return (
    <div className="Chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          val={data.value}
          max={maxValue}
          label={data.label}
        />
      ))}
    </div>
  );
}
