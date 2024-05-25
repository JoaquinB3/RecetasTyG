const frase = document.getElementById("frase")


const frases = [
    "El presente es de ellos; el futuro, para el que se prepara. - Nikola Tesla",
    "A veces es útil tener un punto de vista completamente diferente. - Alan Turing",
    "El pesimista ve dificultad en cada oportunidad; el optimista ve oportunidad en cada dificultad. - Winston Churchill",
];

const indice = Math.floor(Math.random() * frases.length)
const fraseAleatoria = frases[indice]

if (fraseAleatoria === frases[0]) {
    frase.style.textShadow = "2px 2px 2px red"
}else if(fraseAleatoria === frases[1]){
    frase.style.textShadow = "2px 2px 2px blue"
}else{
    frase.style.textShadow = "2px 2px 2px yellow"
}

frase.innerHTML = fraseAleatoria;

// Consumioendo APIS

// const apiId = "d1daa3d3";
// const apiKey = "6547450bfead0f3557887470a5e3db2f";
// const getRecetas = async (e) => {
//     try{
//         //const res = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${apiId}&app_key=${apiKey}%09&nutrition-type=cooking&ingr`)
//         const res = await fetch("www.themealdb.com/api/json/v1/1/random.php")
//         const data = await res.json();
//         console.log(data);
        
//         e.preventDefault()
//         document.getElementById("main").innerHTML = `
        
//         <button onclick="generarRecetaAleatoria(event)" id="buttonAleatorio">GENERAR RECETA</button>
//         <div id="containerRecetas">
//             <h3>¿Que receta toca hoy?</h3>
//             <div>
//                 <img src="./imgCard.png" alt="">
//             </div>
//         </div>
//         `

//         document.getElementById("buttonAleatorio").addEventListener("click",(e)=> generarRecetaAleatoria(e));

//     }catch(e){
//         console.log(e);
//     }
// }



// const generarRecetaAleatoria = (e) => {

//     const data = getRecetas().then(data => {
//         const recetaAleatoria = data.hints[Math.floor(Math.random() * data.hints.lenght)].food.label;
//         const nombre = recetaAleatoria.food.label;    
//         const foto = recetaAleatoria.food.image;
//         const nutrientes = recetaAleatoria.food.nutrients;
    
//         console.log(nombre);
    
//         document.getElementById("containerRecetas").innerHTML = `
        
//             <h3>${nombre}</h3>
//             <div>
//                 <img>${foto}</img>
//             </div>
//             <div>
//                 <p>Calorías: ${nutrientes.ENERC_KCAL} kcal</p>
//                 <p>Proteína: ${nutrientes.PROCNT} g</p>
//                 <p>Grasa: ${nutrientes.FAT} g</p>
//                 <p>Carbohidratos: ${nutrientes.CHOCDF} g</p>
//                 <p>Fibra: ${nutrientes.FIBTG} g</p>
//             </div>
//         `
//     })

// } 
const link1 = (e) => {

    e.preventDefault()
    document.getElementById("main").innerHTML = `

        <button id="buttonAleatorio">GENERAR RECETA</button>
        <div id="containerRecetas">
            <h3>¿Que receta toca hoy?</h3>
            <div>
                <img src="./imgCard.png" alt="">
            </div>
        </div>
        `;

        document.getElementById("buttonAleatorio").addEventListener("click", getReceta);
}

const getReceta = async ()=>{
    try {
        
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await res.json();
        console.log(data);

        const meal = data.meals.strmeals;s


        console.log(meal);

    } catch (error) {
        console.log('Error al obtener la receta', error);
    }


}





