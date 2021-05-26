import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// components
import Header from '@/components/Header/Header'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Content, Container } from '@/components/Layout/Layout'
import Product from '@/components/Product/Product'
import Loading from '@/components/Loading/Loading'

// hooks
import { useFetch } from '@/hooks/useFetch'

// entities
import ProductEntity from '@/entities/productList'

export default function Home(): JSX.Element {
  const router = useRouter()
  const { data } = useFetch<ProductEntity>(
    `items?search=${router.query.search}`
  )

  return (
    <div>
      <Head>
        <title>Busca | MercadoLivre.com.br</title>
        <meta name="description" content="Projeto de teste frontend" />
      </Head>

      <main>
        <Header />
        <Content>
          {data && <Breadcrumb categories={data.categories} />}
          <Container>
            {data ? (
              data?.items.map(it => <Product key={it.id} {...it} />)
            ) : (
              <Loading />
            )}
          </Container>
        </Content>
      </main>
    </div>
  )
}
