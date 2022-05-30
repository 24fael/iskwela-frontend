import React, {useState, useEffect} from "react";
import {Table} from "react-bootstrap"
import AddCourse from "./AddCourse";

export default function AdminDashboard(props){
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const courses_array = props.courses.map(course => {
            return(
                <tr key={course.id}>
                    <td>{course._id}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>{course.price}</td>
                    <td className={course.is_active ? 'text-success': 'text-danger'}>{course.is_active ? 'In Stock': 'Out of Stock'}</td>
                </tr>
            )
        })

        setCourses(courses_array)
    }, [props.courses])

    return(
        <div>
            <div className="text-center my-4">
                <h1>Admin Dashboard</h1>
                <AddCourse refreshData={props.refreshData}/>
            </div>

            <Table striped bordered hover responsive>
                <thead className="bg-dark text-white">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {courses}
                </tbody>
            </Table>
        </div>
    )
}