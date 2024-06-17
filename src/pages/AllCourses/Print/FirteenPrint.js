import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


const FirteenPrint = () => {
  return (
    <div>
    <Link to={'/courses/print'}><Button variant="outlined">Вернуться назад</Button></Link>

        <main>
            <section>
                <h1></h1>

                <img src={'print30'} alt=''/>
            </section>
        </main>
    </div>
  )
}

export default FirteenPrint