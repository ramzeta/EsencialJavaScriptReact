import  {React,useEffect,useState} from "react";

export function App() {
    const nombre = "Ramiro";
    const apellido = "Pérez";
    const objetoPrueba = {
        item1: 1,
        item2: 2,
        item3: 3
    };
    //Desestructucturing
    const cuadrado = {
        x: 11,
        y: 32
    }
    function calcularArea({ x, y }) {
        return x * y;
    }

    const isTrue = true;
    const styleCode = {
        backgroundColor: "grey"
    }


    //Arrays

    const posts = [
        {
            id: 1,
            titulo: "titulo uno",
            imagen: "https:/img.com/1",
            tags: ["uno", "dos"]
        },
        {
            id: 2,
            titulo: "titulo dos",
            imagen: "https:/img.com/2",
            tags: ["uno", "loquesea"]
        },
        {
            id: 3,
            titulo: "titulo tres",
            imagen: "https:/img.com/3",
            tags: ["uno", "godtag", "jaja"]
        }

    ]

    //busca si son iguales
    const elArray = posts.find(post => post.id == 2)
    console.log(elArray);



    //saber si existe o no existe lo que estamos buscando y nos dice true o false :D
    const elArraySome = posts.some(post => post.id == 2)
    console.log(elArraySome);


    //saber si incluye algo dentro de un array que exista
    const elArrayIncludes = posts.some(post => post.tags.includes('jaja'))
    console.log(elArrayIncludes);


    //comprueba si se cumple en todas 
    const elArrayEvery = posts.every(post => post.tags.includes('uno'))
    console.log(elArrayEvery);

    //map es un for pero mas declarativo 
    const elArrayMap = posts.map(post => post.titulo)
    console.log(elArrayMap);


    //reduce   
    const elArrayreduce = posts.reduce((todosTags, post) => {
        //de esta manera hacemos distincion de si existe no mostrarlo 
        return Array.from(new Set([...todosTags, ...post.tags]));
    },[])
    console.log(elArrayreduce);

    // Longhand
    const obj1 = {
        x: 1,
        y: 2,
        z: 3
    }
    
    // Shorthand
    const x = 8
    const y = 10
    const obj2 = { x, y }


    //Optional chaining (?.)
    const adventurer = {
        name: 'Alice',
        cat: {
          name: 'Dinah'
        }
      };
      
      const dogName = adventurer.dog?.name;
      console.log(dogName);
      // expected output: undefined
      
      console.log(adventurer.someNonExistentMethod?.());
      // expected output: undefined

    return (
        <>
            <h2>Cuanto Javascript necesito para React ?</h2>
            <ul>
                <li>Template literals caracteristica ES6 o ES 2015</li>
                <p>{console.log(nombre + " " + apellido)} con template literal {console.log(`${nombre} ${apellido}`)}</p>
                <p> <code style={styleCode}> console.log(nombre + " " + apellido ) con template literal console.log(`${nombre} ${apellido}`)</code></p>
                <li>ShorThand en un objeto podemos ahorrar el clave valor </li>
                <li>Arrow function, ahora lo tratamos como una variable ejemplo: <code style={styleCode}>constu funcionFlecha = () => return Hola</code> </li>
                <li>Destructuring </li>
                <li>Default Parameter antes se comprobaba con if ahora tenemos valores por defecto en funciones<code style={styleCode}> function (a=0,b=0) return a +b</code></li>
                <li>La sintaxis <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread Operator</a>
                    <br />Antes usabamos metodos como concat y ahora
                    <code code style={styleCode}>
                        <br />
                        const array = [1,2,3]; <br />
                        const otroArray = [4,5,6]; <br />
                        const nuevoArray = [...array,...otroArray] <br /> <p>
                            1,2,3,4,5,6
                        </p>
                    </code>
                </li>
                <li>Imports ES6 <code> con desestructuracion para mejorar legibilidad de las importaciones</code></li> <br />
                <p>No todos los navegadores comprenden ES6</p>
                <li>Ternarios en React nos ayuda a hacer en JSX una validación o variantes <br />
                    <code>istrue? "si" : "no" //devolveria si la variable istrue es true = si sino no</code> <br />
                    Con esto podemos renderizar de forma customizada <code>{isTrue ? (<div>es correcto</div>) : (<div>No es correcto</div>)}</code> </li>
                <li>Metodos arrays , find , some , every, includes, map , filter, reduce </li>
                <li>Optional chaining (?.)</li>
            </ul>
        </>
    );
}