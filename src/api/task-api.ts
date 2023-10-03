import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bca6950c-2948-4b4b-bca4-67ce60643f98'
    }
})

// TYPES

export type CommonResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: any
    deadline: any
    id: string
    todoListId: string
    order: number
    addedDate: any
}

export const taskApi = {
    getTask(todolistId: string) {
        return instance.get<TaskType>(`${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<CommonResponseType<{item: TaskType}>>(`${todolistId}/tasks`, {title})
    },
    delTask (todolistId: string, taskId: string) {
        return instance.delete<CommonResponseType>(`${todolistId}/tasks/${taskId}`)
    },
    updTask (todolistId: string, taskId: string, title: string) {
        return instance.put<CommonResponseType>(`${todolistId}/tasks/${taskId}`, {title})
    }
}
