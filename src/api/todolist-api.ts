import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
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

export type ToDoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export const todolistApi = {
    getTodolist() {
        return instance.get<ToDoType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<CommonResponseType<{item: ToDoType}>>('todo-lists', {title})
    },
    delTodolist (todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updTodolist (todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}
