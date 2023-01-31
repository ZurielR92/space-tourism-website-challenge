import { Layout } from '@/components/Layout'
import { Technology } from '@/components/Technology'
import { NextPage } from 'next'
import React from 'react'

const TechnologiPage:NextPage = () => {
    return (
        <Layout title='Technology | Space Tourism'>
            <Technology/>
        </Layout>
    )
}

export default TechnologiPage