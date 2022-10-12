import { faker } from '@faker-js/faker';
import { addProduct, products , updateProduct, searchProduct } from './products/product.service'


for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({min: 10, max: 100}),
    image: faker.image.imageUrl(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    categoryId: faker.datatype.uuid()
  })
}
const p = products[0]
const respons = updateProduct(p.id, {
  title: 'pc de gobierno',
  stock: 50
})

const finded = searchProduct({
  isNew: true
})


console.log(products)
console.log(respons)
console.log(finded)


