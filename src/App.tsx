import {useState, useEffect} from "react";
import type {Teacher} from "./types/teacher.ts";
import {getTeachers} from "./api/teachers.ts";
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

  return (
      <div>
        <h1>Teachinder</h1>
          <div className="teachers-list">
              {teachers.map(teacher => (
                  <TeacherCard teacher={teacher} key={teacher.id} />
              ))}
          </div>
      </div>
  );
}

export default App;