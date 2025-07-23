import React from 'react'
import Amain from '../AComman/Amain'
import Asidebar from '../AComman/Asidebar'
import Asidebars from '../AComan/Asidebars'

function Adminhome() {
    return (
        <div>
            <Asidebars />
            <Amain Aname="Home" />
        </div>
    )
}

export default Adminhome