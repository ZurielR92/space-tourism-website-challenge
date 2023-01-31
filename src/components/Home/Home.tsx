import Link from 'next/link'
import { FC } from 'react'

//Importacion de estilos
import styles from './Home.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Home:FC<Props> = () => {
    return (
        <div className={ styles.home }>

            <div>
                <div className={ styles.text }>
                    <span>SO, YOU WANT TO TRAVEL TO</span>
                    <h1>SPACE</h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </div>

            <div>
                <Link href={'/destination'}>
                    <div className={ styles.explore }>EXPLORE</div>
                </Link>
                <div className={ styles.back }></div>
            </div>

        </div>
    )

}