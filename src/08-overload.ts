// nico => [n,i,c,o] => string => string[]
// [n,i,c,o] => nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else {
    return input.split('') // string[]
  }
}

const rta1 = parseStr(['n','i','c','o'])

// rta1.reverse()
if (Array.isArray(rta1)) {
  rta1.reverse()
}

const rta2 = parseStr('nico')

// rta2.toLowerCase()
if (typeof rta2 === 'string') {
  rta2.toLowerCase()
}
