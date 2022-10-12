const prices: (number | string)[] = [1,2,3,4]
prices.push(1)
prices.push('1')


// tupla
let user: [string, number, boolean] = ['andres', 23, true]

// user = []
// user = ['hola']
// user = [2, 'hola']
user = ['hola', 2, false]
// user = ['hola', 2, 2]

console.log(user)

const [pepe, numero] = user

console.log(pepe)
console.log(numero)
