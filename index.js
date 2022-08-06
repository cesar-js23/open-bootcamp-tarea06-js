let lista = ["frutas", "pollo", "verduras", "cubiertos", "zapatillas"];
lista.push("Aceite de Girasol");
lista.pop();

let listaPeliculas = [
  {
    titulo: "Vendetta",
    director: "James McTeigue",
    fecha: new Date(2006, 02, 16),
  },
  {
    titulo: "Corazón Valiente",
    director: "Mel Gibson",
    fecha: new Date(1995, 04, 19),
  },
  {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    fecha: new Date(2014, 10, 6),
  },
];

const newListaPost = listaPeliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 01)
);

const newListaDirectores = listaPeliculas.map((director) => director.director);

const newListaTitulos = listaPeliculas.map( pelicula => pelicula.titulo);

const directores_titulos = newListaDirectores.concat(newListaTitulos)
const directores_titulos_prop = [...newListaDirectores, ...newListaTitulos]


