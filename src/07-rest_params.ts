import { User, ROLES } from './01-enum'

const currentUser: User = {
  username: 'andres',
  role: ROLES.ADMIN
}

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true
  }
  return false
}

console.log(checkAdminRole())





export const checkRole = (role1: string, role2:string) => {
  if (currentUser.role === role1) {
    return true
  } else if (currentUser.role === role2) {
    return true
  }
  return false
}

console.log(checkRole(ROLES.ADMIN, ROLES.VENDEDOR))






export const checkRoleV2 = (roles: string[]) => {
  return roles.includes(currentUser.role)
}

console.log(checkRoleV2([ROLES.CUSTOMER, ROLES.VENDEDOR]))





export const checkRoleV3 = (...roles: string[]) => {
  return roles.includes(currentUser.role)
}

console.log(checkRoleV3(ROLES.CUSTOMER, ROLES.VENDEDOR))
