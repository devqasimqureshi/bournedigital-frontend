import React, { useEffect, useState } from "react"
import { Container, Grid, Input } from "@mui/material"
import Kanban from "components/kanban"
import List from "components/list"
import KanbanDropdown from "./dropdown"
import { useSelector, useDispatch } from "react-redux"
import { InitialStateType, TaskType } from "interfaces/index"
import TaskDetails from "components/taskdetails"
import RoundButton from "components/layout/round-button"
import { removeSelectedTask } from "store/reducers/selectedTask"
interface Props { }

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { tasks, statuses } = useSelector((state: InitialStateType) => state)
  const [boardType, setBoardType] = useState<Number>(1)
  const [showTaskdetails, setShowTaskdetails] = useState(false);
  const [filteredTask, setFilteredTask] = useState<TaskType[]>(tasks);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    search(searchKeyword);
  }, [tasks])

  const handleChange = (e: any) => {
    setBoardType(e.target.value)
  }

  const onTaskDetailClose = () => {
    dispatch(removeSelectedTask());
    setShowTaskdetails(false);
  }

  const onAddTask = () => {
    setShowTaskdetails(true);
  }

  const search = (keyword: string) => {
    setFilteredTask((prev: TaskType[]) => {
      keyword = keyword.toLocaleLowerCase();
      return tasks.filter((task: TaskType) => task.name?.toLowerCase().includes(keyword) || task.description?.toLowerCase().includes(keyword))
    })
    setSearchKeyword(keyword);
  }

  return (
    <Container style={{ padding: "2rem", margin: 0, maxWidth: "100%" }}>
      <TaskDetails open={showTaskdetails} onClose={onTaskDetailClose} />
      <Grid
        justifyContent="center"
        container
      >
        <Grid container width="950px">
          <Grid xs={2}>
            <KanbanDropdown defaultType={String(boardType)} onChange={handleChange} />
          </Grid>
          <Grid item xs={4} display="flex">
            <Input onChange={(e) => search(e.target.value)} placeholder="Search..." />
          </Grid>
          <Grid item xs={6} display="flex" justifyContent="flex-end" alignItems="flex-end">
            <RoundButton onClick={onAddTask} />
          </Grid>
          <Grid xs={12}>
            {boardType === 1 ?
              <Kanban tasks={filteredTask} statuses={statuses} /> :
              <List tasks={filteredTask} />}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
