import "./TeacherCard.css";
import type {Teacher} from "../types/teacher.ts";

interface TeacherCardProps {
    teacher: Teacher;
    onLike: (id: string) => void;
}

function TeacherCard({teacher, onLike}: TeacherCardProps) {
    return (
        <div className="card">
            {teacher.photo ? <img className='avatar' src={teacher.photo} alt={teacher.firstName}/> : <span className='avatar'>{teacher.firstName[0]}.{teacher.lastName[0]}</span>}
            <p className="card-name">{teacher.firstName} {teacher.lastName}</p>
            <p className="card-subject">{teacher.speciality}</p>
            <p className="card-country">{teacher.country}</p>
            <button className="like-btn" onClick={() => onLike(teacher.id)}>❤ {teacher.likesCount}</button>
        </div>
    )
}

export default TeacherCard;