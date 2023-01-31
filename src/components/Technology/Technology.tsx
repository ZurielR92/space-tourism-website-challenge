import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import data from '../../data.json';

//Importacion de estilos
import styles from './Technology.module.scss'
import { iTechnology } from './types';

//Propiedades que recibe el componente
interface Props {
}


export const Technology:FC<Props> = () => {

    const [ select, setSelect ] = useState( 0 );
    const [ info, setInfo ] = useState<iTechnology | undefined>( data.technology[0]  )

    useEffect( () => {
        setInfo(data.technology[ select ]);
    }, [ select ] )


    return (
        <div className={ styles.technology }>

            <div>
                <div className={ `${styles.img} ${ select == 0 ? styles.one : '' } ${ select == 1 ? styles.two : '' } ${ select == 2 ? styles.three : '' }` }></div>
                <div className={ styles.separator }></div>
            </div>

            <div>
                <div className={ styles.select }>
                <span>
                    <strong>03</strong>
                    SPACE LAUNCH 101
                </span>
                    <ul>
                        <li
                            className={ select == 0 ? styles.active : '' }
                            onClick = { () => setSelect( 0 ) }
                        >1</li>
                        <li
                            className={ select == 1 ? styles.active : '' }
                            onClick = { () => setSelect( 1 ) }
                        >2</li>
                        <li
                            className={ select == 2 ? styles.active : '' }
                            onClick = { () => setSelect( 2 ) }
                        >3</li>
                    </ul>
                    <h2>THE TERMINOLOGY...</h2>
                    <h1>{ info?.name }</h1>
                    <p>
                        { info?.description }
                    </p>
                </div>
                <div className={ styles.grow }></div>
                <div className={ styles.separator }></div>
            </div>

        </div>
    )

}