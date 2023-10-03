import React, {useEffect, useState} from 'react'
import {taskApi} from "../api/task-api";

export default {
    title: 'API'
};

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '96e74fa5-0ab2-48b4-a793-e7c50f5c2f65'
        taskApi.getTask(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title= 'Make a decison'
        const todolistId = '96e74fa5-0ab2-48b4-a793-e7c50f5c2f65'
        taskApi.createTask(todolistId, title)
            .then((res)=>{
                setState(res.data.data.item.title)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const  taskId = '7e011418-fb08-4cbd-a927-394130b2c01e'
    useEffect(() => {
        taskApi.delTask(taskId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = 'd3ef3e2d-c0c9-4408-9584-8b7e7ed85eb6'
        const title = '5555'
        taskApi.updTask(taskId, title)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}