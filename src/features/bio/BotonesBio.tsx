import React, {FC} from 'react'
import { BotonesBioProps } from '../../interfaces/Interfaces'
import { INFO_SIMPSONS, NombresSimpsons } from './constants'
import { BotonBio } from './styled'

/**
 * Separe la botonera del componente Bio porque agregaba mucha logica al mismo y era separable,
 * solo tuve que pasarle las props necesarias
 */

const BotonesBio: FC<BotonesBioProps> = ({bioActiva, onClick}) => {
  return (
    <>
        {Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre}
      >
        {nombre}
      </BotonBio>
    ))}
    </>
  )
}

export default BotonesBio