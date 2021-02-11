import React, { useState, createContext, useContext, useEffect} from 'react'
import firebase from './service/firebasedb';

export const AppContext = createContext()
  
export const AppCtxProvider = props => { 
    const [ reclamosList, setReclamosList ] = useState([]);

    useEffect(async () => {
        getReclamosList();
    }, []);

    const db = firebase.firestore();

    const getReclamosList = () => {
        db.collection('reclamos').onSnapshot(snapshot => {
            const items = [];
            snapshot.forEach(doc => items.push({...doc.data(), id: doc.id}));
            setReclamosList(items);
        });
    };

    const addReclamo = (reclamo) => {
        if(reclamo.imagen.length === 0) reclamo.imagen = 'https://www.essdetbol.ru/images/no_photo.png';
        db.collection('reclamos').doc().set({...reclamo, imagen: reclamo.imagen});
    };

    const getReclamo = async (id) => {
        const data = await (await db.collection('reclamos').doc(id).get()).data();
        return data;
    };


const value = { reclamosList, addReclamo, getReclamo }

return (
    <AppContext.Provider {...props} value={value} />
    )
}
    
export const useContextInfo = () => useContext(AppContext)