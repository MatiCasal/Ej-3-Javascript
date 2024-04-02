const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", " Tomate", " Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      " Tomate",
      " Queso Azul",
      " Parmesano",
      " Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", " Tomate", " Rucula", " Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", " Tomate", " Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.querySelector(".form_container");
const inputNumber = document.querySelector(".input_number");
const containerPizza = document.querySelector(".container_pizza");

const saveLocalStorage = (pizza) => {
  localStorage.setItem("ultimaPizza", JSON.stringify(pizza));
};

const isValidNumber = (numeroIngresado) => {
  if (isNaN(numeroIngresado)) {
    mostrarMensajeError(
      "No ingresó ningún número, por favor ingresa un número del 1 al 5."
    );
    return false;
  }
  return true;
};

const mostrarMensajeError = (mensaje) => {
  containerPizza.innerHTML = `<p>${mensaje}</p>`;
};

const renderizarPizza = (pizza) => {
  const cardHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}" />
      <p>Ingredientes: ${pizza.ingredientes}</p>
      <p>Precio: ${pizza.precio}</p>
    </div>
  `;
  containerPizza.innerHTML = cardHTML;
};

const buscarPizzaPorId = (id) => {
  return pizzas.find((pizza) => pizza.id === id);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeroIngresado = parseInt(inputNumber.value);

  if (!isValidNumber(numeroIngresado)) {
    return;
  }

  const pizzaEncontrada = buscarPizzaPorId(numeroIngresado);

  if (pizzaEncontrada) {
    renderizarPizza(pizzaEncontrada);
    saveLocalStorage(pizzaEncontrada);
  } else {
    mostrarMensajeError(
      "No se encontró ninguna pizza con ese ID. Ingresa un número del 1 al 5."
    );
  }
});

// Función para inicializar la página
const init = () => {
  // Verificar si hay una pizza guardada en localStorage
  const ultimaPizza = JSON.parse(localStorage.getItem("ultimaPizza"));

  // Si hay una pizza guardada, renderizarla
  if (ultimaPizza) {
    renderizarPizza(ultimaPizza);
  }
};

init();
