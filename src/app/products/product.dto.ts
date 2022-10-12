import { Product } from "./product.model"

// omite las propiedades especificadas, el contrario es Pick
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updateAt' | 'category' > {
  categoryId: string
}

// pone todos los campos como opcionales , el contrario es Required
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// los pongo a todos en opcionales y le digo que seran de solo lectura
export interface FindProductDto extends Readonly<Partial<Product>>{}
