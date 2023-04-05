import { Container, Grid } from "@mui/material"
import React, { useState } from "react"
import BoardStrips from "./strips"
import { TaskType, StatusType, StatusEnum } from "interfaces"
import { useDispatch } from "react-redux"
import { getNestedChildIds, updateTask, updateTaskAction } from "store/reducers/tasks"
import { DispatchType } from "store/index"

interface Props {
    tasks: TaskType[],
    statuses: StatusType[]
}

const Kanban: React.FC<Props> = ({ tasks, statuses }) => {

  const dispatch: DispatchType = useDispatch();
  const [threatTasks, setThreatTasks] = useState<number[]>([]);
  const [taskDragId, setTaskDragId] = useState(0);

  const onTaskDrop = (taskId: number, statusId: (number | undefined)) => {
    let currentTask: (TaskType | undefined) = {...tasks.find(task => task.id === taskId)};
    currentTask.status = statusId
    dispatch(updateTaskAction(taskId, currentTask));
    setThreatTasks([])
  }

  const onTaskDragOver = (taskId: number, statusId: (number | undefined)) => {
    if (threatTasks.length) {
      if (statusId !== StatusEnum.COMPLETED) {
        setThreatTasks([]);
      }
    }
    else if (statusId === StatusEnum.COMPLETED) {
      let currentTask: (TaskType | undefined) = { ...tasks.find(task => task.id === taskId) };
      if (currentTask) {
        console.log("currentTask ==> ", taskId, currentTask)
        setThreatTasks(getNestedChildIds(currentTask));
      }
    }
  }

  const onDragStart = (id: number) => {
    setTaskDragId(id);
  }

  return (
    <Grid wrap="nowrap" overflow="auto" container>
      {statuses.map((status, index) => <div
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => { 
          e.preventDefault()
          onTaskDragOver(taskDragId, status.id)
        }}
        onDrop={(e) => onTaskDrop(taskDragId, status.id)}
      >
        <BoardStrips key={index} tasks={tasks} status={status} threatTasks={threatTasks} onDrag={onDragStart} />
      </div>
      )}
    </Grid>
  );
}

export default Kanban