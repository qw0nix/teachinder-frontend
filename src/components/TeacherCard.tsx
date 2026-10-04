import type {Teacher} from "../types/teacher.ts";
import './TeacherCard.css'

interface TeacherCardProps {
    teacher: Teacher;
    onLike: (id: string) => void;
}

function TeacherCard({ teacher, onLike }: TeacherCardProps) {
    return (
        <div className="card">
            {teacher.photo ? (
                <img className='avatar' src={teacher.photo} alt={teacher.firstName}/>
            ) : (
                <span className='avatar'>{teacher.firstName[0]}{teacher.lastName[0]}</span>
            )}
            <p>{teacher.firstName}</p>
            <p>{teacher.lastName}</p>
            <p>{teacher.speciality}</p>
            <p>{teacher.country}</p>
            <button onClick={() => onLike(teacher.id)}>{teacher.likesCount}</button>
        </div>
    )
}

export default TeacherCard;