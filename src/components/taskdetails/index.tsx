import React, { useState } from "react"
import { StatusEnum, TaskType } from "interfaces"
import { Box, Button, FormLabel, Grid, Input, MenuItem, Modal, Select, TextareaAutosize } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { removeTask, setTask, updateTask, updateTaskAction } from "store/reducers/tasks"
import { DispatchType, InitialStateType } from "store/index"
import { setSelectedTask, updateSelectedTask } from "store/reducers/selectedTask"

interface Props {
    open: boolean
    task?: TaskType
    onClose?: () => void
}

const TaskDetails: React.FC<Props> = ({ open, onClose }) => {
    const dispatch: DispatchType = useDispatch()
    const { tasks, selectedTask, statuses } = useSelector((state: InitialStateType) => state);
    const openModal = (!!selectedTask.id || open);

    const onInputChange = (e: any) => {
        //@ts-ignore
        dispatch(updateSelectedTask({ [e.target.name]: e.target.value }))
    }

    const onChildrens = (e: any) => {
        let childrens = [...(selectedTask.childrens || [])];
        let subTask = tasks.find(task => task.id === e.target.value)
        if (subTask)
            childrens.push(subTask);
        dispatch(updateSelectedTask({ childrens }))
    }

    const onSave = () => {
        if (selectedTask?.id) {
            dispatch(updateTaskAction(selectedTask.id, selectedTask));
        }
        else {
            dispatch(setTask({ ...selectedTask }));
        }
        onClose && onClose();
    }

    const onChildTaskClick = (selectedTaskChildren: TaskType) => {
        dispatch(setSelectedTask(tasks.find(task => task.id === selectedTaskChildren.id)))
    }

    return (
        <Modal
            open={openModal}
            onClose={onClose}
        >
            <Grid className="taskdetails" sx={{ width: "60%" }} container>
                <Grid padding="30px" container>
                    <Grid
                        xs={8}
                        item
                    >
                        <Grid padding="10px">
                            <Grid>
                                <FormLabel>
                                    Name:
                                </FormLabel>
                            </Grid>
                            <Grid>
                                <Input
                                    name={"name"}
                                    value={selectedTask?.name}
                                    placeholder="eg. Task1"
                                    onChange={onInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid padding="10px">
                            <Grid>
                                <FormLabel>
                                    Status
                                </FormLabel>
                            </Grid>
                            <Grid>
                                <Select
                                    name="status"
                                    value={selectedTask?.status || 0}
                                    onChange={onInputChange}
                                >
                                    <MenuItem style={{ display: "none" }} value={0}>
                                        No Selection
                                    </MenuItem>
                                    {statuses.map((status) => <MenuItem
                                        disabled={(!selectedTask.id && StatusEnum.COMPLETED === status.id)}
                                        key={status.id}
                                        value={status.id}>
                                        {status.label}
                                    </MenuItem>
                                    )}
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid padding="10px">
                            <Grid>
                                <FormLabel>
                                    Description
                                </FormLabel>
                            </Grid>
                            <Grid>
                                <TextareaAutosize
                                    name={"description"}
                                    value={selectedTask?.description}
                                    style={{ width: "100%" }}
                                    minRows={6}
                                    onChange={onInputChange}
                                    placeholder="write your task details here..."
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid>
                                <FormLabel>
                                    Select Subtasks
                                </FormLabel>
                            </Grid>
                            <Grid>
                                <Select
                                    name="childrens"
                                    value={0}
                                    onChange={onChildrens}
                                >
                                    <MenuItem style={{ display: "none" }} value={0}>
                                        No Selection
                                    </MenuItem>
                                    {tasks.filter(task => selectedTask.id !== task.id && !selectedTask.childrens?.some(child => child.id === task.id))
                                        .map((task) => <MenuItem key={task.id} value={task.id}>
                                            {task.name}
                                        </MenuItem>)}
                                </Select>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        xs={4}
                        item
                    >
                        <h4>Child Tasks</h4>
                        {selectedTask.childrens && selectedTask.childrens.map((selectedTaskChildren, index) => {
                            return <Box
                                key={index}
                                style={{ display: "flex", background: "white", boxShadow: "0px 0px 2px gray" }}
                                height="30px"
                                width="100%"
                                onClick={() => onChildTaskClick(selectedTaskChildren)}
                            >
                                {selectedTaskChildren.name}
                            </Box>
                        })}
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onSave}>Save</Button>
                </Grid>
            </Grid>
        </Modal>
    );
}

export default TaskDetails