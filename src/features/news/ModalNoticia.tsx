import React, {FC} from 'react'
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from './styled';
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { ModalNoticiaProps } from '../../interfaces/Interfaces';

const ModalNoticia: FC<ModalNoticiaProps> = ({modal, setModal}) => {
  return (
    <ContenedorModal>
            <TarjetaModal>
              <CloseButton onClick={() => setModal(null)}>
                <img src={Close} alt="close-button" />
              </CloseButton>
              <ImagenModal
                src={modal.esPremium ? SuscribeImage : modal.imagen}
                alt={modal.esPremium ? "mr-burns-excelent" : "news-image"}
              />
              <CotenedorTexto>
                <TituloModal>
                  {modal.esPremium
                    ? "Suscríbete a nuestro Newsletter"
                    : modal.titulo}
                </TituloModal>
                <DescripcionModal>
                  {modal.esPremium
                    ? "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."
                    : modal.descripcion}
                </DescripcionModal>
                {modal.esPremium && (
                  <BotonSuscribir
                    onClick={() =>
                      setTimeout(() => {
                        alert("Suscripto!");
                        setModal(null);
                      }, 1000)
                    }
                  >
                    Suscríbete
                  </BotonSuscribir>
                )}
              </CotenedorTexto>
            </TarjetaModal>
          </ContenedorModal>
  )
}

export default ModalNoticia