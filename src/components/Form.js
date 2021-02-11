import React, { useReducer, useState } from 'react'
import { useContextInfo } from '../context'

const Form = ({history}) => {
    const [ invalidTitulo, setInvalidTitulo ] = useState(false);
    const [ invalidDescripcion, setInvalidDescripcion ] = useState(false);
    const [ invalidComuna, setInvalidComuna ] = useState(false);
    const { addReclamo } = useContextInfo()

    const initialValues = {
        titulo: '',
        descripcion: '',
        comuna: '',
        imagen: ''
    };

    const [ formValues, setFormValues ] = useReducer(
        (curValues, newValues)=> ({...curValues, ...newValues}), initialValues
    );

    const { titulo, descripcion, comuna, imagen } = formValues;

    function handleFormChange(event) {
       const { name, value } = event.target;
       setFormValues({[name]: value});
       inputValidation(name, value);
    };

    async function handleFormSubmit(e) {
        e.preventDefault();
        if (!inputValidation('titulo', titulo) || !inputValidation('descripcion', descripcion) || !inputValidation('comuna', comuna)) return;
        await addReclamo(formValues);
        setFormValues({...initialValues});
    };

    function inputValidation(key, value) {
        if (value.length === 0 || value === "nocomuna") {
            switch (key) {
                case 'titulo':
                    setInvalidTitulo(true);
                    break;
                case 'descripcion':
                    setInvalidDescripcion(true);
                    break;
                case 'comuna':
                    setInvalidComuna(true);
                    break;
                default:
                    return;
            };
            return false;
        };
        setInvalidTitulo(false);
        setInvalidDescripcion(false);
        setInvalidComuna(false);
        return true;
    };

    return (
        <form onSubmit={handleFormSubmit} className="col-12 col-md-6 p-4">
            <h3 className="form-text">Hacé tu reclamo acá:</h3>
            <div className="form-group">
                <label className="form-label" htmlFor="titulo">Título del reclamo<span style={{color: 'red'}}>*</span>:</label>
                <input className="form-control" id="titulo" type="text" name="titulo" value={titulo} placeholder="Pérdida de gas..." onChange={handleFormChange} />
                {invalidTitulo && <div class="alert alert-danger" role="alert">Por favor ingresa el título de tu reclamo</div>}
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="descripcion">Descripción<span style={{color: 'red'}}>*</span>:</label>
                <textarea className="form-control" id="descripcion" name="descripcion" value={descripcion} rows="4" onChange={handleFormChange}></textarea>
                {invalidDescripcion && <div class="alert alert-danger" role="alert">Por favor escribi tu reclamo</div>}
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="comuna">Comuna<span style={{color: 'red'}}>*</span>:</label>
                <select className="form-control" id="comuna" name="comuna" value={comuna} placeholder="Comuna" onChange={handleFormChange}>

                    <option value="nocomuna">- Selecciona tu comuna -</option>
                    <option value="comuna1">Comuna 1 (Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución)</option>
                    <option value="comuna2">Comuna 2 (Recoleta)</option>
                    <option value="comuna3">Comuna 3 (Balvanera y San Cristóbal)</option>
                    <option value="comuna4">Comuna 4 (La Boca, Barracas, Parque Patricios y Nueva Pompeya)</option>
                    <option value="comuna5">Comuna 5 (Almagro y Boedo)</option>
                    <option value="comuna6">Comuna 6 (Caballito)</option>
                    <option value="comuna7">Comuna 7 (Flores y Parque Chacabuco)</option>
                    <option value="comuna8">Comuna 8 (Villa Soldati, Villa Riachuelo y Villa Lugano)</option>
                    <option value="comuna9">Comuna 9 (Liniers, Mataderos y Parque Avellaneda)</option>
                    <option value="comuna10">Comuna 10 (Villa Real, Monte Castro, Versalles, Floresta, Velez Sarsfield y Villa Luro)</option>
                    <option value="comuna11">Comuna 11 (Villa General Mitre, Villa Devoto, Villa del Parque y Villa Santa Rita)</option>
                    <option value="comuna12">Comuna 12 (Coghlan, Saavedra, Villa Urquiza y Villa Pueyrredón)</option>
                    <option value="comuna13">Comuna 13 (Nuñez, Belgrano y Colegiales)</option>
                    <option value="comuna14">Comuna 14 (Palermo)</option>
                    <option value="comuna15">Comuna 15 (Chacarita, Villa Crespo, La Paternal, Villa Ortúzar, Agronomía y Parque Chas)</option>
                </select>
                {invalidComuna && <div class="alert alert-danger" role="alert">Por favor ingresa tu comuna</div>}
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="imagen">Imagen:</label>
                <input className="form-control" id="imagen" type="file" name="imagen" value={imagen} placeholder="Imagen" onChange={handleFormChange} />
            </div>
            <button className="btn btn-primary mt-4 float-right btn-block" type="submit">Enviar reclamo</button>
        </form>
    )
}

export default Form
