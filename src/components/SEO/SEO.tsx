import Head from 'next/head'
import { FC } from 'react'

//Propiedades que recibe el componente
interface Props {
    title?: string
    description?: string
}


export const SEO:FC<Props> = ({ title = 'Space Tourism', description }) => {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.png"/>
            <title>{ title }</title>
            <meta name="description" content={ description } />

        </Head>
    )

}