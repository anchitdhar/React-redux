import React from 'react'

function ProjectSummary({data}) {
    return (
        <div>
            {data && data.map((item) => (
                <div className="py-5">
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                </div>
            ))}   
        </div>
    )
}

export default ProjectSummary
