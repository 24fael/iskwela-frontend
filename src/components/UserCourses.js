import React, {useEffect, useState} from "react";
import CourseCard from "./CourseCard";

export default function UserCourses(props){
    const [courses, setCourses] = useState([])

    // track changes
    useEffect(() => {
        const courses_arr = props.courses.map(course => {
            if(course.is_active === true){
                return(
                    <CourseCard key={course._id} course={course}/>
                )
            } else {
                return null
            }
        })

        setCourses(courses_arr)

    }, [props.courses])

    return(
        <div>
            {courses}
        </div>
    )
}