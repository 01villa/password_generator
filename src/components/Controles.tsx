import React from 'react';

interface ControlesProps {
    longitud: number;
    setLongitud: (longitud: number) => void;
    setUsarMayusculas: (usar: boolean) => void;
    setUsarNumeros: (usar: boolean) => void;
    setUsarSimbolos: (usar: boolean) => void;
    generarContraseña: () => void;
}

const Controles: React.FC<ControlesProps> = ({
    longitud,
    setLongitud,
    setUsarMayusculas,
    setUsarNumeros,
    setUsarSimbolos,
    generarContraseña
}) => {
    return (
        <div>
            <label>
                Longitud:
                <input 
                    type="number" 
                    value={longitud} 
                    onChange={(e) => setLongitud(Number(e.target.value))} 
                    min={1} 
                    max={20} 
                />
            </label>
            <label>
                <input type="checkbox" onChange={(e) => setUsarMayusculas(e.target.checked)} />
                Incluir Mayúsculas
            </label>
            <label>
                <input type="checkbox" onChange={(e) => setUsarNumeros(e.target.checked)} />
                Incluir Números
            </label>
            <label>
                <input type="checkbox" onChange={(e) => setUsarSimbolos(e.target.checked)} />
                Incluir Símbolos
            </label>
            <button onClick={generarContraseña}>Generar Contraseña</button>
        </div>
    );
};

export default Controles;
