import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { iDestination } from '../Destination';
import data from '../../data.json';

//Importacion de estilos
import styles from './Crew.module.scss'
import { iCrew } from './types';

//Propiedades que recibe el componente
interface Props {
}


export const Crew:FC<Props> = () => {

    const [ select, setSelect ] = useState( 0 );
    const [ info, setInfo ] = useState<iCrew | undefined>( data.crew[0]  )

    useEffect( () => {
        setInfo(data.crew[select]);
    }, [ select ] )


    return (
        <div className={ styles.crew }>

            <div>
                <Image src={ `${ info?.images.webp }` } width={ 177 } height={ 222 } alt={ 'moon image' } />
                <div className={ styles.separator }></div>
            </div>

            <div>
                <div className={ styles.select }>
                <span>
                    <strong>02</strong>
                    MEET YOUR CREW
                </span>
                    <ul>
                        <li
                            className={ select == 0 ? styles.active : '' }
                            onClick= { () => setSelect( 0 ) }
                        ></li>
                        <li
                            className={ select == 1 ? styles.active : '' }
                            onClick= { () => setSelect( 1 ) }
                        ></li>
                        <li
                            className={ select == 2 ? styles.active : '' }
                            onClick= { () => setSelect( 2 ) }
                        ></li>
                        <li
                            className={ select == 3 ? styles.active : '' }
                            onClick= { () => setSelect( 3 ) }
                        ></li>
                    </ul>
                    <h2>{ info?.role }</h2>
                    <h1>{ info?.name }</h1>
                    <p>
                        { info?.bio }
                    </p>
                </div>
                <div className={ styles.grow }></div>
                <div className={ styles.separator }></div>
            </div>

        </div>
    )

}