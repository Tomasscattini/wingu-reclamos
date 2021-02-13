import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from '../context';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ReclamosList = () => {
    const [ reclamos, setReclamos ] = useState(null);
    const [ reclamoToShow, setReclamoToShow ] = useState(null);
    const { reclamosList } = useContextInfo();

    useEffect(() => {
        setReclamos([...reclamosList]);
        if(reclamos) setReclamoToShow(reclamos[0])
    }, [reclamosList]);

    return  (
        <main className="col-12 col-md-6">
            {reclamos?.length > 0 ? <><h3 className="mb-4">Reclamos vigentes:</h3><p>(Hacé click al costado de la imagen para ver más reclamos)</p><Carousel>
            {reclamos?.map(reclamo => {
                reclamo.comuna = reclamo.comuna.replace('comuna', 'Comuna ')
                
                return (<Link to={`/reclamo/${reclamo.id}`} key={reclamo.titulo + reclamo.id} style={{textDecoration: 'none', color: 'black', padding: "20px", display: "block"}}>
                    <div className="card text-center mt-4">
                        <div className="card-header">
                            <p className="card-title"><strong>{reclamo.titulo}</strong></p>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top mb-4" style={{height: "250px", objectFit:"cover"}} src={reclamo.imagen || 'https://www.essdetbol.ru/images/no_photo.png'} alt={reclamo.titulo} />
                            <p>{reclamo.descripcion}</p>
                        </div>
                        <div className="card-footer">
                            <p>{reclamo.comuna}</p>
                        </div>
                    </div>
                </Link>
            )})}</Carousel></> : <h3>No hay reclamos</h3>}
        </main>
    );
};

export default ReclamosList;
