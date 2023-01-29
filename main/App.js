

const contenedorSelect2 = document.getElementById("seleccion2"); //select del html desde el js
const select2 = document.createElement("select"); //elemento "select."
select2.setAttribute("id", "select2"); //creo un id a select2



//Suscripción

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
  e.preventDefault();
  document.querySelector('.subscription').classList.add('done');
  isNaN(valorIngresado)
});

//Cotizador
// creo array vacio"
let mercados = [];

const obtenerCriptos = async () => {
  try {
    const response = await fetch(
      "https://634df628f34e1ed82680f393.mockapi.io/coins"
    );
    const listaApi = await response.json();
    mercados = listaApi
    listaApi.forEach((mercado) => {  // recorra todo el array de objetos
      select2.classList.add("opcionCripto1"); // le asigno una clase al elemento select creado
      select2.innerHTML += `
        <option id=${mercado.abreviatura} value=${mercado.abreviatura} > ${mercado.abreviatura} </option>
        `;
    });
    return contenedorSelect2.appendChild(select2); // Uno lo realizado al elemento creado
  } catch (error) {
    console.log(error);
  }
};

//selector 2

const formulario = document.getElementById("form"); //Llamo al del html desde el js
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // para que no se actualice el navegador al generarse el evento
  const monedas = document.getElementById("select2"); 

  const form = new FormData(formulario); 
  const valorIngresado = form.get("valorIngresado2");


// VALIDACION

  isNaN(valorIngresado)
    ? Swal.fire({ icon: "error", title: "Error, Debe ingresar un numero" })
    : convertirValor(valorIngresado, monedas.value); 
});



// OPERACION

const convertirValor = (valorIngresado, moneda) => {
  //declaro variable y realizo la operacion
  const monedaResultado = mercados.find(
    (mercado) => mercado.abreviatura === moneda
  ); 
  const resultado = valorIngresado / monedaResultado.precio; //operacion
  pintarResultado(resultado, monedaResultado);

};

const pintarResultado = (resultado, moneda) => {
  //declaro las variables con sus parametros y lo pinto en el html
  const contenedorDiv = document.getElementById("valorResultado");
  contenedorDiv.innerHTML = `
            <div class="valorResultado"> ${resultado.toFixed(2)} ${moneda.abreviatura} <img class="" src=${moneda.logo}></img></div>
    `;
//Aplicando localStorage

  //Guardamos el resultado en el localStorage
  const guardar = { resultado, moneda };
  guardarResultadoStorage(guardar);
};



//primero lo guardo
const guardarResultadoStorage = (resultado) => {
  localStorage.setItem("resultado", JSON.stringify(resultado));
};

//luego obtengo el resultado
const tomarResultadoStorage = () => {
  const resultadoStorage = JSON.parse(localStorage.getItem("resultado"));
  return resultadoStorage;
};


//lo muestro al actualizar,condicionales para luego quitar los hidden del cotizador.
document.addEventListener("DOMContentLoaded", () => {
  obtenerCriptos();
  if (localStorage.getItem("resultado")) {
    coin = tomarResultadoStorage();
    pintarResultado(coin.resultado, coin.moneda);
  }
});


//Precio de las criptomonedas 
let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let dot = document.getElementById("polkadot");
let sol = document.getElementById("solana");
let usdt = document.getElementById("tether");

let liveprice = {
  "async": true,
  "scroosDomain": true,
  "url":  "https:/api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Csolana%2Ctether%2Cavalanche&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}
$. ajax(liveprice).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  dot.innerHTML = response.polkadot.usd;
  sol.innerHTML = response.solana.usd;
  usdt.innerHTML = response.tether.usd;


});







