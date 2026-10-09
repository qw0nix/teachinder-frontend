export interface Teacher {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    email: string;
    phone: string;
    city: string;
    birthDate: string;
    speciality: string;
    likesCount: number;
    gender: "MALE" | "FEMALE";
    nationality?: string | null;
    photo?: string | null;
    notes?: string | null;
    backgroundColor?: string | null;
}

export interface TeachersListResponse {
    teachers: Teacher[];
    totalCount: number;
}