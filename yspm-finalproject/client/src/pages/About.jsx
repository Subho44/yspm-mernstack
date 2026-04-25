import React from 'react'

const About = () => {
    const emp = [
        {
            name: "raj",
            location: "kolkata",
            salary: 45000,
            position: "tech lead"
        },
        {
            name: "raj1",
            location: "kolkata",
            salary: 45000,
            position: "tech lead"
        },
        {
            name: "raj2",
            location: "kolkata",
            salary: 45000,
            position: "tech lead"
        },

    ];

    return <>
        <div className='container-fluid mt-5'>
            <table className='table table-dark'>
                <tr>
                    <th>name</th>
                    <th>location</th>
                    <th>salary</th>
                    <th>position</th>
                </tr>
                {
                    emp.map(x=>(
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.location}</td>
                            <td>{x.salary}</td>
                            <td>{x.position}</td>
                        </tr>
                    ))
                }

            </table>
        </div>




    </>
}

export default About