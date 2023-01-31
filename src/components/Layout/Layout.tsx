import { FC, ReactNode } from 'react'
import { SEO } from '../SEO'

//Importacion de estilos
import styles from './Layout.module.scss'

//Propiedades que recibe el componente
interface Props {
    children: ReactNode
    title?: string
    description?: string
}


import { Bellefair } from '@next/font/google'
import { Barlow_Condensed } from '@next/font/google'
import { Navbar } from '../Navbar'

const bellefair = Bellefair({ 
  weight: ['400'],
  subsets:['latin'],
  variable:'--bellefair'
});

const barlowCondensed = Barlow_Condensed({
    weight: ['400'],
    subsets:[ 'latin' ],
    variable:'--barlowCondensed'
})


export const Layout:FC<Props> = ({ children, title, description }) => {
    return (
        <>
            <SEO title={ title } description={ description }/>
            <div className={ `${styles.layout} ${ barlowCondensed.variable } ${ bellefair.variable }` }>

                {children}

            </div>
            <Navbar/>
        </>
    )

}