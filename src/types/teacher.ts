export interface Teacher {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    email: string;
    phone: string;
    city: string;
    birthDate: string;
    gender: string;
    nationality?: string | null;
    speciality: string;
    photo?:  string | null;
    likesCount: number;
    notes?: string | null;
    backgroundColor?: string | null;
}

export interface TeachersListResponse {
    totalCount: number;
    teachers: Teacher[];
}