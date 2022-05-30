import React, {useContext, useEffect, useState} from 'react'
import UserContext from '../contexts/UserContext'
import AdminDashboard from '../components/AdminDashboard'
import UserCourses from '../components/UserCourses'

export default function CoursePage() {
    const [allCourses, setAllCourses] = useState([])

    const {user} = useContext(UserContext)

    const getAllCourses = () => {
        fetch('http://localhost:4000/courses/')
        .then(response => response.json())
        .then(result => {
            setAllCourses(result)
        })
    }

    useEffect(() => {
        getAllCourses()
    }, [])

    return(
        <div>
            <h1>Courses</h1>
            { (user.isAdmin === true) ?
                <AdminDashboard courses={allCourses} refreshData={getAllCourses}/>
                :
                <UserCourses courses={allCourses}/>
            }
        </div>
    )
}