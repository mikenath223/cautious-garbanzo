import { isEmpty, isNil } from 'lodash'

type UseIsValid = boolean

function isValid<T>(value: T): UseIsValid {
  return !isEmpty(value) && !isNil(value)
}

export default isValid
