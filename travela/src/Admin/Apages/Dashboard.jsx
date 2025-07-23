import React from 'react'
import Asidebars from '../AComan/Asidebars'
import Amains from '../AComan/Amains'


function Dashboard() {
    return (
        <div>
           
            <Asidebars/>
            <Amains Aname="Dashboard" />
            <div className='container-fluid' >
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>

                    <h1>hello this Dashboard page</h1>

                </div>
            </div>

        </div>

    )
}

export default Dashboard