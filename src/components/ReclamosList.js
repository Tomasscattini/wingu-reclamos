import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from '../context';

const ReclamosList = () => {
    const { reclamosList } = useContextInfo();

    return  (
        <main className="col-12 col-md-6 p-4">
            {reclamosList.length > 0 ? reclamosList.map(reclamo => {
                reclamo.comuna = reclamo.comuna.replace('comuna', 'Comuna ')
                
                return (<Link to={`/reclamo/${reclamo.id}`} key={reclamo.titulo + reclamo.id} style={{textDecoration: 'none', color: 'black'}}>
                    <div className="card text-center mt-4">
                        <div className="card-header">
                            <p className="card-title"><strong>{reclamo.titulo}</strong></p>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src={reclamo.imagen} alt={reclamo.titulo} />
                            <p>{reclamo.descripcion}</p>
                        </div>
                        <div className="card-footer">
                            <p>{reclamo.comuna}</p>
                        </div>
                    </div>
                </Link>
            )}) : <h3>No hay reclamos</h3>}
        </main>
    )
};

export default ReclamosList;
