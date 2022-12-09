import { useEffect, useState } from "react";
import obtenerInformacionNoticias from "../../helpers/obtenerInformacionNoticias";
import { INoticiasNormalizadas } from "../../interfaces/Interfaces";
import ModalNoticia from "./ModalNoticia";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura,
} from "./styled";

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    obtenerInformacionNoticias().then((response: INoticiasNormalizadas[]) =>
      setNoticias(response)
    );
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(noticia)}>
              Ver más
            </BotonLectura>
          </TarjetaNoticia>
        ))}
        {modal && <ModalNoticia modal={modal} setModal={setModal}/>}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
