import { obtenerNoticias } from "../features/news/fakeRest";

/**
 * Separe esta funcion del componente News porque es una funcion 
 * que actua como helper entonces se lo podia extraer y luego importar
 */
const obtenerInformacionNoticias = async () => {
  const respuesta = await obtenerNoticias();

  const data = respuesta.map((n) => {
    const titulo = n.titulo
      .split(" ")
      .map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      })
      .join(" ");

    const ahora = new Date();
    const minutosTranscurridos = Math.floor(
      (ahora.getTime() - n.fecha.getTime()) / 60000
    );

    return {
      id: n.id,
      titulo,
      descripcion: n.descripcion,
      fecha: `Hace ${minutosTranscurridos} minutos`,
      esPremium: n.esPremium,
      imagen: n.imagen,
      descripcionCorta: n.descripcion.substring(0, 100),
    };
  });

  return data;
};

export default obtenerInformacionNoticias;
