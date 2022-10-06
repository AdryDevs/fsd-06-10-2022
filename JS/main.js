// OJO para proyecto!!! si la posición es = 0 ("") entonces pinto círculo o X, si no es ="" no pinto

//Cambios ES6

// let dia = "Jueves";

// var mes = "OCtubre";

// function Fecha (){
//     let dia = "Miércoles";
//     var mes = "Noviembre";

//     return console.log(mes);
// };

// Fecha();

// console.log(dia);
// console.log(mes);


// FUNCTIONS VS ARROW FUNCTIONS

// function Multiplicar(num1, num2) {
//     return num1 * num2;
// };

// const Multiplicar = (num1, num2) => {  //hay que hacerlo así
//     return num1 * num2;
// };

// const Multiplicar = (num1, num2) => num1 * num2;    //Se puede hacer así siempre que solo sea una línea, function in-line

// const Exponente = num1 => num1 ** 2;   // Si solo tiene un parámetro no hace falta ponerle un paréntesis


//Funciones que devuelven objetos

// let pokemon = {
//     nombre : "Charmander"
// };

// const Pokemon = nombre => {monster : nombre};  //ESTO ESTÁ MAL, lo considera función.

// const Pokemon = nombre => ({monster : nombre})  //ESTO ESTÁ BIEN. Si le pones paréntesis sabrá que es un objeto.

// let boton = Pokemon ("Charmander");  //Este botón llamará a la propiedad "Charmander" del objeto pokemon.


// El por qué de las arrow functions

//Mapear arrays

        //primero con un for (que es peor)

// let fruta = ["manzana", "pera", "fresa", "plátano", "albaricoque"];

// for (let i = 0;i < fruta.length; i++){
//     fruta[i] = fruta[i] + "s";    
// };

// console.log(fruta)

        //ahora lo mismo pero mapeado

// let frutasPlurales = fruta.map(postre => postre + "s"); //mete en la variable postre cada uno de los elementos dentro del array. 

// console.log(frutasPlurales);

// let numeros = [25, 38, 42, 57, 112];

// let numerosMapeados = numeros.map(cifra => cifra * 3);

// console.log(numerosMapeados);

// const precioFinalImpuesto = (precio, impuesto = 0.21) => precio + (precio * impuesto);

// console.log(precioFinalImpuesto(1200));


//Crea un programa que genere nombres aleatorios de robots tipo RX837 o RX811

// const CrearNombre = (numero = parseInt(Math.random()*999), modelo = "RX") => modelo + numero;

// console.log(crearNombre());

//SPREAD (repartir valores)

// const Esparcir = (name, ps, atk, def, speed) => {
//         console.log("Normbre: ", name);
//         console.log("Vida: ", ps);
//         console.log("Ataque ", atk);
//         console.log("Defensa ", def);
//         console.log("Velocidad ", speed);
// };

// let Pokemon = ["Pikachu", 35, 55, 40, 90];

// let Conquistador = ["Raditz", 40, 66, 30, 99];

// Esparcir(...Pokemon); //La propiedad spread reparte las distintas posiciones del arrey en los argumentos de la función, siempre por orden.
// Esparcir(...Conquistador);


//REST

// const Agrupar = (...argumentos) {
//         console.log(argumentos);
// };

// Agrupar(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]

// Se propone generar una funcion que usando REST, le pasamos varios argumentos correspondientes a las habilidades de un luchador o luchadora, y posteriormente las mostrará por console.log , a cada habilidad le sumará un valor random del 1 al 10.

// const Agrupar = (...argumentos) => {
//         let aleatorio = parseInt((Math.random()*10));

//         let nuevoArgumentos = argumentos.map(numeros => numeros + aleatorio);

//         console.log(nuevoArgumentos);
// };

// Agrupar(5, 6, 7, 11);

//EXTENSIONES DE OBJETOS LITERALES

// let soyUnObjetoLiteral = {
//         cuidad: "Valencia",
//         pais: "Spain",
//         phone: 34
// };

//STRINGS 

// let favorito = prompt("Dime tu alumno favorito");

// console.log(`Hola ${favorito}`);


//Asignación por desestructuración

// let comida = ["spaguetti", "sushi", "paella", "arroç al forn", "pizza"];

// let [uno, dos, tres, cuatro, cinco] = comida;

// console.log(tres);

//desestructurar un objeto

// let musica = {
//         grupo1: "Pink Floyd",
//         grupo2: "Joan Macarra", 
//         grupo3: "Bad Bunny"
// };


//creo la desestructuración del objeto

// let {grupo1: rock, grupo2: punk, grupo3: trap_latino} = musica;

// console.log(rock, punk, trap_latino);