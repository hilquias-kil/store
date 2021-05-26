import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// components
import Header from '@/components/Header/Header'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Content, Container } from '@/components/Layout/Layout'
import Product from '@/components/Product/Product'
import Loading from '@/components/Loading/Loading'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

// hooks
import { useFetch } from '@/hooks/useFetch'

// entities
import ProductEntity from '@/entities/productList'

export default function Home(): JSX.Element {
  const router = useRouter()
  const { data, loading, error } = useFetch<ProductEntity>(
    `items?q=${router.query.q}`
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
            {data && data?.items.map(it => <Product key={it.id} {...it} />)}
            {loading && <Loading />}
            {error && <ErrorMessage />}
          </Container>
        </Content>
      </main>
    </div>
  )
}
