import { Product } from './product.model'
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto'
import { faker } from '@faker-js/faker'

export const products: Product[] = []


export const addProduct = (data: CreateProductDto) => {
  const newProduct ={
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updateAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}


export const updateProduct = (id: string, changes: UpdateProductDto) => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index]
}

export const searchProduct = (search: FindProductDto): Product[] => {
  const response: Product[] = []

  for (const product of products) {
    for (const key in search) {
      if(product[key as keyof typeof product] === search[key as keyof typeof search]) response.push(product)
    }
  }

  return response
}

export const getAllProducts = () => {
  return products
}

export const deletProduct = (id: string) => {
  let product = products.findIndex(e => e.id === id)
  products.splice(product, 1)
}
