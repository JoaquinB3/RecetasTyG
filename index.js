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

        const meal = data.meals[0].strMeal;
        const imagen = data.meals[0].strMealThumb;

        const ingredientes = Object.entries(data.meals[0]).filter(([key, value]) => {
            return key.startsWith('strIngredient') && value !== '';
        }).map(([key, value]) => value);

        console.log(meal);
        console.log(ingredientes);
    

        document.getElementById("containerRecetas").innerHTML = `
            <div class="containerData" style="background-image: url(${imagen})">
                <h3>${meal}</h3>
                <div class="containerIngredientes">
                    <ul>
                        ${ingredientes.map(ingredient => `<li>-    ${ingredient}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `

    } catch (error) {
        console.log('Error al obtener la receta', error);
    }


}





