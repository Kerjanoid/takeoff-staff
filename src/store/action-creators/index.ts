import * as AuthActionCreators from './auth'
import * as ContactsActionCreators from './contacts'

const allActionCreators = {
  ...AuthActionCreators,
  ...ContactsActionCreators
}

export default allActionCreators
