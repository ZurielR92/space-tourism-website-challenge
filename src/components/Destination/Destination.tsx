import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import data from '../../data.json'

//Importacion de estilos
import styles from './Destination.module.scss'
import { iDestination } from './types'

//Propiedades que recibe el componente
interface Props {
}


export const Destination:FC<Props> = () => {

    const [ select, setSelect ] = useState( 'Moon' );
    const [ info, setInfo ] = useState<iDestination | undefined>( data.destinations[0]  )

    useEffect( () => {
        setInfo(data.destinations.find( (data) => data.name === select ));
    }, [ select ] )

    return (
        <div className={ styles.destination }>

            <div>
                <span>
                    <strong>01</strong>
                    PICK YOUR DESTINATION
                </span>
                <Image src={ `${info?.images.webp}` } width={ 170 } height={ 170 } alt={ 'moon image' } />
            </div>

            <div>
                <div className={ styles.select }>
                    <ul>
                        <li 
                            className={ select === 'Moon' ? styles.active : '' }
                            onClick={ () => setSelect('Moon') }
                        >MOON</li>
                        <li
                            className={ select === 'Mars' ? styles.active : '' }
                            onClick={ () => setSelect('Mars') }
                        >MARS</li>
                        <li
                            className={ select === 'Europa' ? styles.active : '' }
                            onClick={ () => setSelect('Europa') }
                        >EUROPA</li>
                        <li
                            className={ select === 'Titan' ? styles.active : '' }
                            onClick={ () => setSelect('Titan') }
                        >TITAN</li>
                    </ul>
                    <h1>{ select }</h1>
                    <p>
                        { info?.description }
                    </p>
                </div>
                <div className={ styles.grow }></div>
                <div className={ styles.separator }></div>
                <div className={ styles.hub }>
                    <div>
                        <small>AVG DISTANCE</small>
                        <span>{ info?.distance }</span>
                    </div>
                    <div>
                        <small>EST: TRAVEL TIME</small>
                        <span>{ info?.travel }</span>
                    </div>

                </div>
            </div>

        </div>
    )

}