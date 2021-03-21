import React from 'react'
import styled from 'styled-components'
import ProjectList from '../projects/ProjectList'
import Notifications from '../dashboard/Notifications'

function DashBoard() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <ProjectList />
                </div>
                <div className="col-4">
                    <Notifications />
                </div>
            </div>
        </div>
    )
}

export default DashBoard
