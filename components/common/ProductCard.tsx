import { Product } from '@/sanity.types'
import { image } from '@/sanity/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({product}:{product:Product}) => {
  return (
    <div>
        <div>
            {product?.images && <Link href={`/product/${product?.slug?.current}`}>
                <image src={image(product?.images[0]).size(900,700).url()} alt="" /></Link>}
        </div>
    </div>
  )
}

export default ProductCard