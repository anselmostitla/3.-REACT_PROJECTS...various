// import { func } from "prop-types";
import "./task.css";

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi first homework</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Homework almost done" : "Pending homework"}
      </span>
    </div>
  );
}
