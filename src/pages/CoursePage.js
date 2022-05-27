import React from 'react'
import CourseCard from '../components/CourseCard'
import courses from '../mock_data/courses_data'


export default function CoursePage() {
    return(
        <div>
            <h1>Courses</h1>
            {
                courses.map(course => <CourseCard key={course.id} course={course}/>)
            }
        </div>
    )
}