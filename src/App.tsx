import {useState, useEffect} from "react";
import type {Teacher} from "./types/teacher.ts";
import {getTeachers, likeTeacher} from "./api/teachers.ts";
import TeacherCard from "./components/TeacherCard";
import './App.css'
function App() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getTeachers();
            setTeachers(data.teachers)
        }
        fetchData();
    }, []);

     async function handleLike(id: string) {
            await likeTeacher(id)
             setTeachers((prevTeachers) => {
            return prevTeachers.map(teacher => teacher.id === id ? ({...teacher, likesCount: teacher.likesCount + 1}) : teacher )
        });
    }

  return (
      <div>
        <h1>Teachinder</h1>
          <div className="teachers-list">
              {teachers.map(teacher => (
                  <TeacherCard teacher={teacher} key={teacher.id} onLike={handleLike} />
              ))}
          </div>
      </div>
  );
}

export default App;