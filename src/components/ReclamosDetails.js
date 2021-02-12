import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from '../context';

const ReclamosDetails = ({match: { params: {id}}}) => {
    const [ reclamo, setReclamo ] = useState(null);

    const { getReclamo } = useContextInfo();

    useEffect(async () => {
        const data = await getReclamo(id);
        setReclamo(data);
    });

    return (
        reclamo && <main className="col-12 col-md-6 p-4">
            <Link to="/reclamos">Volver a la lista de reclamos</Link>
            <div className="card text-center mt-4">
                <div className="card-header">
                    <p className="card-title">{reclamo.titulo}</p>
                </div>
                <div className="card-body">
                    <img className="card-img-top" src={reclamo.imagen || 'https://www.essdetbol.ru/images/no_photo.png'} alt={reclamo.titulo} />
                    <p>{reclamo.descripcion}</p>
                </div>
                <div className="card-footer">
                    <p>{reclamo.comuna}</p>
                </div>
            </div>
        </main>
    )
}

export default ReclamosDetails
