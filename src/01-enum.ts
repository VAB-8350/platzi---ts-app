export enum ROLES {
  ADMIN = 'admin',
  VENDEDOR = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string
  role: ROLES
}

const andres: User = {
  username: 'vabklb',
  role: ROLES.ADMIN
}
