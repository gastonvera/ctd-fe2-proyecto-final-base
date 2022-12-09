import { useState } from "react";
import BotonesBio from "./BotonesBio";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioContainer,
  BioDescripcion,
  BioImagen,
  BioNombre,
  ContenedorBotones,
} from "./styled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  return (
    <BioContainer>
      <ContenedorBotones>
        <BotonesBio onClick={onClick} bioActiva={bioActiva}/>
      </ContenedorBotones>
      <div>
        <div>
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
