import React, { useState, useRef } from 'react';
import './App.css'; // Importa el archivo CSS
import Controles from './components/controles';
import ContraseñaGenerada from './components/contraseñagenerada';

const App: React.FC = () => {
    const [longitud, setLongitud] = useState<number>(12);
    const [usarMayusculas, setUsarMayusculas] = useState<boolean>(false);
    const [usarNumeros, setUsarNumeros] = useState<boolean>(false);
    const [usarSimbolos, setUsarSimbolos] = useState<boolean>(false);
    const [contraseña, setContraseña] = useState<string>('');
    const contraseñaRef = useRef<HTMLInputElement>(null);

    const generarContraseña = () => {
        const caracteres = 'abcdefghijklmnopqrstuvwxyz' +
                          (usarMayusculas ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
                          (usarNumeros ? '0123456789' : '') +
                          (usarSimbolos ? '!@#$%^&*()_+' : '');

        let nuevaContraseña = '';
        for (let i = 0; i < longitud; i++) {
            nuevaContraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        setContraseña(nuevaContraseña);
    };

    const copiarAlPortapapeles = () => {
        if (contraseñaRef.current) {
            contraseñaRef.current.select();
            document.execCommand('copy');
            alert('Contraseña copiada al portapapeles');
        }
    };

    return (
        <div className="container">
            <h1>Generador de Contraseñas Seguras</h1>
            <Controles 
                longitud={longitud} 
                setLongitud={setLongitud} 
                setUsarMayusculas={setUsarMayusculas} 
                setUsarNumeros={setUsarNumeros} 
                setUsarSimbolos={setUsarSimbolos} 
                generarContraseña={generarContraseña} 
            />
            <ContraseñaGenerada 
                contraseña={contraseña} 
                contraseñaRef={contraseñaRef} 
                copiarAlPortapapeles={copiarAlPortapapeles} 
            />
        </div>
    );
};

export default App;
