import React from "react";
import { Grid } from "@mui/material";
import BoardCard from "../card";
import type { TaskType, StatusType } from "interfaces";
import { useDispatch } from "react-redux";
import { setSelectedTask } from "store/reducers/selectedTask";

interface Props {
  tasks: TaskType[],
  status: StatusType,
  threatTasks: number[],
  onDrag: (id: number) => void
}

const BoardStrips: React.FC<Props> = ({ tasks, status, threatTasks, onDrag }) => {

  const dispatch = useDispatch()

  console.log("threatTasks ==> ", threatTasks)

  return (
    <div style={{ marginTop: "2rem" }}>
      {status.label}
      <Grid
        height="75vh"
        minWidth="300px"
        width="300px"
        margin="0 1rem 0 0"
        xs={3}
        style={{ background: "rgb(244, 245, 247)", padding: "1rem" }}
        item
      >
        {tasks.map((task: TaskType, index: number) =>
          task.status === status.id && (
            <div
              draggable 
              onDragStart={(e) => {
                onDrag(task.id || 0)
              }}
              style={{ display: "flex", 
                height: "fit-content", 
                width: "100%", 
                cursor: "pointer",
                marginBottom: "10px",
                opacity: threatTasks.includes(Number(task.id)) ? "0.3" : "1"
              }} 
              onClick={() => dispatch(setSelectedTask(task))}
            >
              <BoardCard key={index} {...task} />
            </div>
          )
        )}
      </Grid>
    </div>
  );
};

export default BoardStrips;
