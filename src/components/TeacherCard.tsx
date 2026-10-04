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
            <p className="name">{teacher.firstName} {teacher.lastName}</p>
            <p className="subject">{teacher.speciality}</p>
            <p className="country">{teacher.country}</p>
            <button className="like-btn" onClick={() => onLike(teacher.id)}>{teacher.likesCount}</button>
        </div>
    )
}

export default TeacherCard;