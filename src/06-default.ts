export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10, // primera opcion para default
  description?: string // segunda opcion para default
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
    description: description ?? 'sin descripcion'
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true)
console.log('producto 1', p1)


const p2 = createProduct(2)
console.log('producto 2', p2)


const p3 = createProduct(3, false, 0)
console.log('producto 3', p3)

const p4 = createProduct(4, false, 0, 'description')
console.log('producto 3', p4)
