import React from 'react';

interface ContraseñaGeneradaProps {
    contraseña: string;
    contraseñaRef: React.RefObject<HTMLInputElement>;
    copiarAlPortapapeles: () => void;
}

const ContraseñaGenerada: React.FC<ContraseñaGeneradaProps> = ({
    contraseña,
    contraseñaRef,
    copiarAlPortapapeles
}) => {
    return (
        <div>
            <label>
                Contraseña Generada:
                <input 
                    type="text" 
                    value={contraseña} 
                    readOnly 
                    ref={contraseñaRef} 
                />
            </label>
            <button onClick={copiarAlPortapapeles}>Copiar al Portapapeles</button>
        </div>
    );
};

export default ContraseñaGenerada;
