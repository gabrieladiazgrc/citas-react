import { useState, useEffect } from "react";
import Error from "./error";

function Formulario() {
    const [mascota,setMascota]=useState('');
    const [propietario,setPropietario]=useState('');
    const [email,setEmail]=useState('');
    const [alta,setAlta]=useState('');
    const [sintomas,setSintomas]=useState('');
    const [error,setError]=useState(false);

    const validarFormulario=(e)=>{
        e.preventDefault()
        if([mascota, propietario, email, alta, sintomas].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return
        };
        setError(false);
    //--------------Limpiar inputs
    setMascota('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
    };
    return(
        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="font-black text-3xl text-center mb-5 mt-5">Seguimiento Pacientes</h2>
            <p className="mt-5xl text-center text-lg">Añade pacientes <span className="text-indigo-600 font-bold">Administrarlos</span></p>
        <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg mb-10"
        onSubmit={validarFormulario}>
            <div>
                {
                    error&&<Error>
                        <p>Todos los campos son obligatorios.</p>
                    </Error>
                }
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la mascota:</label>
                    <input id="mascota" type="text" placeholder="Ingrese el nombre de la mascota..." className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setMascota(e.target.value)}
                    value= {mascota}/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario:</label>
                    <input id="propietario" type="text" placeholder="Ingrese el nombre del propietario..." className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" 
                    value={propietario} onChange={(e)=>setPropietario(e.target.value)}/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <label  htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electrónico:</label>
                    <input id="email" type="text" placeholder="Ingrese el correo electrónico..." className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta:</label>
                    <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md" 
                    value={alta} onChange={(e)=>setAlta(e.target.value)}/>
                    <br/>
                    <br/>
                </div>
                <div>
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold mt-2">Síntomas:</label>
                    <input id="sintomas" type="text" placeholder="Ingrese los síntomas que presenta..." className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
                    value={sintomas} onChange={(e)=>setSintomas(e.target.value)}/>
                    <br/>
                    <br/>
                </div>
            </div>
            <input name="registrarCita" value="Registrar cita" type="submit" className="bg-indigo-500 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors font-bold"></input>
        </form>
        </div>
    )
}

export default Formulario;