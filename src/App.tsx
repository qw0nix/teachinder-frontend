import "./App.css";
import Header from "./components/Header";
import type {Teacher} from "./types/teacher.ts";
import {useState, useEffect} from "react";
import {getTeachers} from "./api/teachers.ts";
import TeacherCard from "./components/TeacherCard";

function App() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    useEffect(() => {
        async function loadTeachers() {
            const data = await getTeachers();
            setTeachers(data.teachers)
        }
        loadTeachers();
    }, []);

    function handleLike(id: string) {
        console.log(id);
    }

  return (
    <div>
      <Header />
        <p>Всего: {teachers.length}</p>
        <div className="teachers-list">
        {teachers.map((teacher: Teacher) => (
            <TeacherCard onLike={handleLike} teacher={teacher} key={teacher.id}/>
        ))}
        </div>
    </div>
  );
}

export default App;
