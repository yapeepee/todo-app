import {Todo} from './types.js';
const API_BASE_URL = 'http://localhost:5250/api/todo';
export async function getAllTodos(): Promise<Todo[]> {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error('cannot fetch todo');
    }
    return response.json();
}

export async function createTodo(todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>): Promise<Todo> {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('cannot create todo');
    }
    return response.json();
}   



export async function updateTodo(id: number ,todo: Todo):
 Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('cannot update todo');
    }
}



export async function deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/${id}`,{
        method: 'DELETE', 
    });
    if (!response.ok) {
        throw new Error('cannot delete todo');
    }
}


export async function getTodoById(id: number): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('cannot fetch todo by id');
    }
    return response.json();
}