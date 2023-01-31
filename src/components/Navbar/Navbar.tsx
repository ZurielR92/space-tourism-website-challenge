import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

//Importacion de estilos
import styles from './Navbar.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Navbar:FC<Props> = () => {

    const router = useRouter();
    const [ showSidebar, setShowSidebar ] = useState(false)

    return (
        <div className={ styles.navbar }>

            <Image className={ styles.logo } src={'/shared/logo.svg'} width={ 44 } height={ 44 } alt='Space Tourism Logo' />
            <div className={ styles.bar }></div>
            
            
            <nav className={ `${ showSidebar && styles.active }` }>
                <ul>
                    <Link  href={'/'}>
                        <li className={ router.route === '/' ? styles.active : '' } >
                            <strong>00</strong>
                            <span>HOME</span>
                        </li>
                    </Link>
                    <Link href={'/destination'}>
                        <li className={ router.route.includes('/destination') ? styles.active : '' }>
                            <strong>01</strong>
                            <span>DESTINATION</span>
                        </li>
                    </Link>
                    <Link href={'/crew'}>
                        <li className={ router.route.includes('/crew') ? styles.active : '' }>
                            <strong>02</strong>
                            <span>CREW</span>
                        </li>
                    </Link>
                    <Link href={'technology'} passHref>
                        <li className={ router.route.includes('/technology') ? styles.active : '' }>
                            <strong>03</strong>
                            <span>TECHNOLOGY</span>
                        </li>
                    </Link>
                </ul>
            </nav>

            <Image 
                alt=''
                width={ 40 } 
                height={ 40 }
                src={`/shared/icon-${ showSidebar ? 'close' : 'hamburger'}.svg`} 
                className={ `${ styles.icon_menu }` } 
                onClick={ () => setShowSidebar( !showSidebar ) } 
            /> 

            <div className={ styles.container }>
            
            </div>

        </div>
    )

}