import { Category } from "../categories/category.model"
import { BaseModel } from "../base.model"

export type Sizes = 'S' | 'M' | 'L' | 'XL'

export interface Product extends BaseModel {
  title: string
  image: string
  description: string
  color: string
  price: number
  stock: number
  size?: Sizes
  category: Category
  isNew: boolean
  tags: string[]
}
