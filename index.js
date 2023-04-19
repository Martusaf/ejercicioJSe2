const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Punto A:

const idPares = pizzas.filter((pizzas) => {
	return pizzas.id % 2 !== 0;
});

idPares.forEach((pizzas) => {
console.log(` El producto ${pizzas.nombre} tiene id impar `);
 });

 //Punto B:

 const preciosMenorA = (precio) => {
	return pizzas.some((pizzas) => {
		return pizzas.precio < precio;
	})}

		console.log(`Hay pizzas con precio menor a ${precio}`);


//Punto C:

const pizzaConPrecio = pizzas.filter(
	(pizzas) => {
		return pizzas.nombre && pizzas.precio;
	}
);

pizzaConPrecio.forEach((pizzas) => {
    console.log(`El producto ${pizzas.nombre}, que cuesta $${pizzas.precio}`); 
});
