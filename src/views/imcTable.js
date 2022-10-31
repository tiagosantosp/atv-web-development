import {useEffect, useState} from 'react'
import ImcCalculatorService from '../domain/services';

export default function ImcTable() {
    const [table, setTable] = useState({})

    
    useEffect(() =>{
        const svc = new ImcCalculatorService();
        svc.getTable(dataTable => setTable(dataTable))
    },[])

    if (table !== null || table !== undefined) {
        return (
            <ul className='lista'>
                <li>{table["0"]}</li>
                <li>{table["18.5"]}</li>
                <li>{table["24.9"]}</li>
                <li>{table["99"]}</li>
            </ul>
        )
    }

    return (
        <div>
            Não ok
        </div>
    )
}