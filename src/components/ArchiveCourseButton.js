//ArchiveCourse.js
import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveCourse({ courseId, isActive, refreshData}) {

	const archiveToggle = (courseId) => {
		fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${ courseId }/archive`,{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
			}
		})
		.then(res => res.json())
		.then(data =>{
			if(data === true) {
				Swal.fire({
					title: 'success',
					icon: 'success',
					text: 'Course successfully disabled'
				})
				refreshData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Something went wrong'
				})
				refreshData()
			}
		})
	}

	const activateToggle = (courseId) => {
		fetch(`${process.env.REACT_APP_API_BASE_URL}/courses/${ courseId }/activate`,{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('accessToken')}`
			}
		})
		.then(response => response.json())
		.then(result => {
			if(result === true) {
				Swal.fire({
					title: 'success',
					icon: 'success',
					text: 'Course successfully activated'
				})
				refreshData()
			}else {
				Swal.fire({
					title: 'error',
					icon: 'error',
					text: 'Something went wrong'
				})
				refreshData()
			}
		})
	}

	return(

		<>

			{isActive  ?
				<Button variant="danger" size="sm" onClick={() => archiveToggle(courseId)}>Disable</Button>

				:

				<Button variant="success" size="sm" onClick={() => activateToggle(courseId)}>Enable</Button>

			}
			
		</>
		)
}