import { NombresSimpsons } from "../features/bio/constants";

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

export interface BotonesBioProps {
  bioActiva: {
    id: NombresSimpsons;
    nombre: string;
    descripcion: string;
    image: string;
  };
  onClick: (nombre: NombresSimpsons) => void;
}

export interface ModalNoticiaProps {
  modal: INoticiasNormalizadas;
  setModal: React.Dispatch<React.SetStateAction<INoticiasNormalizadas | null>>;
}
