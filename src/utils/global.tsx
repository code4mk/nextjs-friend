/**
 * Return .env
 *
 * @param {string} key - env key
 * @returns {string|object} - string or object
 */
const getEnv: any = (key: string = ''): string | {} => {
  let value: string = ''
  let env: any = process.env.dot

  if (key !== '') {
    if (Object.keys(env).includes(key)) {
      value = env[key]
    } else {
      console.warn(`${key} - is not found in dotEnv`)
    }
  } else {
    value = env
  }

  return value
}

export { getEnv }
