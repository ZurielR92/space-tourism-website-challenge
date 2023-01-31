import { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { Destination } from '@/components/Destination'

const DestinationPage:NextPage = () => {
  return (
    <Layout title='Destination | Space Tourism'>

        <Destination/>

    </Layout>
  )
}

export default DestinationPage