import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

function ProjectList() {

    const data = useSelector(state => state.project.projects)

    return (
        <div className="container">
            <ProjectSummary data={data}/>
        </div>
    )
}

export default ProjectList
