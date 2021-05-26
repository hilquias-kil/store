import React from 'react'
import { BreadcrumbContainer } from './Breadcrumb.styles'
import { CategoriesEntity } from '../../entities/productList'

interface Props {
  categories: CategoriesEntity[] | null
}

const Breadcrumb: React.FC<Props> = ({ categories = [] }) => {
  const [category] = categories

  return (
    <BreadcrumbContainer>
      {category && (
        <ul>
          {category?.pathFromRoot?.map(it => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )}
    </BreadcrumbContainer>
  )
}

export default Breadcrumb
