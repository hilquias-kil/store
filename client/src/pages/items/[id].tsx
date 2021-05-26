import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import Header from '@/components/Header/Header'
import { Content, Container } from '@/components/Layout/Layout'
import Price from '@/components/Price/Price'
import Image from '@/components/Image/Image'
import {
  ProductLayout,
  ProductDescription,
  ProductInfo
} from '@/components/ProductLayout/ProductLayout'
import { BuyButton } from '@/components/BuyButton/BuyButton'
import Loading from '@/components/Loading/Loading'

// hooks
import { useFetch } from '@/hooks/useFetch'

// entities
import ProductDetailEntity from '@/entities/productDetail'

export default function Product(): JSX.Element {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch<ProductDetailEntity>(`items/${id}`)
  const { item: product } = data || {}

  return (
    <div>
      <Head>
        <title> | MercadoLivre.com.br</title>
        <meta name="description" content="Projeto de teste frontend" />
      </Head>

      <main>
        <Header />
        <Content>
          <Container>
            {data ? (
              <ProductLayout>
                <div className="row">
                  <div className="col">
                    <Image large>
                      <img src={product.picture} alt={product.title} />
                    </Image>
                  </div>
                  <div className="col">
                    <ProductInfo>
                      <span className="sold">
                        {product.condition} - {product.soldQuantity} vendidos
                      </span>
                      <h2>{product.title}</h2>
                      <Price {...product.price} large />
                      <Link href="/">
                        <BuyButton className="BuyButton">Comprar</BuyButton>
                      </Link>
                    </ProductInfo>
                  </div>
                </div>
                <ProductDescription>
                  <h3>Descripción del producto</h3>
                  <p>{product.description}</p>
                </ProductDescription>
              </ProductLayout>
            ) : (
              <Loading />
            )}
          </Container>
        </Content>
      </main>
    </div>
  )
}
