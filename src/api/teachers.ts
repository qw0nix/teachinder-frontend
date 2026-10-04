import type { TeachersListResponse } from '../types/teacher';

export async function getTeachers(): Promise<TeachersListResponse> {
    const response = await fetch('http://localhost:3000/teachers');
    const data: TeachersListResponse = await response.json();
    return data;
}