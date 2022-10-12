import { BaseModel } from "../base.model"

export enum ROLES {
  ADMIN = 'admin',
  VENDEDOR = 'seller',
  CUSTOMER = 'customer'
}

export interface User extends BaseModel {
  username: string
  role: ROLES
}
