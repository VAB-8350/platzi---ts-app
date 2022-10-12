export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? false
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true)
console.log('producto 1', p1)


const p2 = createProduct(1)
console.log('producto 2', p2)


const p3 = createProduct(1, false, 0)
console.log('producto 3', p3)
