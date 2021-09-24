import React from 'react'
import Test from './Test'
import { Third } from './Third'

function First() {
    return (
        <>
            <Test />
            <h2 style={{ backgroundColor: 'orange', color: 'white' }}>welcome to React js</h2>
            <h3 style={{ backgroundColor: 'pink' }}>this is heading three</h3>
            {/*jsx syntax */}
            <Third />
        </>
    )
}

export default First
