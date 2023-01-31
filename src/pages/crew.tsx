import { Crew } from '@/components/Crew'
import { Layout } from '@/components/Layout'
import { NextPage } from 'next'
import React from 'react'

const CrewPage:NextPage = () => {
  return (
    <Layout title='Crew | Space Tourism'>
        <Crew/>
    </Layout>
  )
}

export default CrewPage