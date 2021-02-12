import React, { useState, createContext, useContext, useEffect} from 'react'
import firebase from './service/firebasedb';

export const AppContext = createContext()
  
export const AppCtxProvider = props => { 
    const [ reclamosList, setReclamosList ] = useState([]);
    const db = firebase.firestore();

    useEffect(async () => {
        getReclamosList();
    }, []);


    const getReclamosList = () => {
        db.collection('reclamos').onSnapshot(snapshot => {
            const items = [];
            snapshot.forEach(doc => items.push({...doc.data(), id: doc.id}));
            setReclamosList(items);
        });
    };

    const addReclamo = (reclamo) => {
        db.collection('reclamos').doc().set(reclamo);
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