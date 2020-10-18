import React from 'react';
import {Link} from 'react-router-dom';
const Table = ({documents, headers, linkTo, onDelete, primaryKey='id'}) => (
    <table>
        <thead>
            <tr key='head'>
                {headers && headers.map( header =>(<th key={header.label}>{header.label}</th>))}
                {linkTo && <th key='acciones'>Acciones</th>}
            </tr>
        </thead>
        <tbody>
            {headers && documents && documents.map(document=>(
                <tr key={document.id}>
                    {headers && headers.map(header=>(
                        <td key={`${document.id}-${header.key}`}>
                            {document[header.key]}
                        </td>
                    ))}
                    <td key={`${document.id}-accion`}>
                        {linkTo && <Link to={`${linkTo}/${document.id}`}>Editar</Link>}
                        {onDelete && <button onClick={()=>onDelete(document[primaryKey])}>Borrar</button>}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)
export default Table;