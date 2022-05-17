import React from "react";

export function App(){
    const nombre = "Ramiro";
    const apellido = "Pérez";
    const objetoPrueba={
        item1:1,
        item2:2,
        item3:3
    };
    //Desestructucturing
    const cuadrado ={
        x:11,
        y:32
    }
    function calcularArea({x,y}){
        return x*y;
    }


    const styleCode = {
        backgroundColor:"grey"
    }
    return (
        <>
        <h2>Cuanto Javascript necesito para React ?</h2>
        <ul>
            <li>Template literals caracteristica ES6 o ES 2015</li>
            <p>{console.log(nombre + " " + apellido )} con template literal {console.log(`${nombre} ${apellido}`)}</p>
            <p> <code style={styleCode}> console.log(nombre + " " + apellido ) con template literal console.log(`${nombre} ${apellido}`)</code></p>
            <li>ShorThand en un objeto podemos ahorrar el clave valor </li>
            <li>Arrow function, ahora lo tratamos como una variable ejemplo: <code style={styleCode}>constu funcionFlecha = () => return Hola</code> </li>
            <li>Destructuring </li>
            <li>Default Parameter antes se comprobaba con if ahora tenemos valores por defecto en funciones<code style={styleCode}> function (a=0,b=0) return a +b</code>  </li>
            <li>La sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.
                <br />Antes usabamos metodos como concat y ahora  
                <code code style={styleCode}>
                    <br />
                    const array = [1,2,3]; <br />
                    const otroArray = [4,5,6]; <br /> 
                    const nuevoArray = [...array,...otroArray] <br />

                </code>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </>
    );
}