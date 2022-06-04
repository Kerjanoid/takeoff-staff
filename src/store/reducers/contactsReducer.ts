import { ContactsAction, ContactsActionTypes, ContactsState } from "../../types/contacts";

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: null
}

export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
      return { contacts: [], isLoading: true, error: null }
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return { contacts: action.payload, isLoading: false, error: null }
    case ContactsActionTypes.FETCH_CONTACTS_ERROR:
      return { contacts: [], isLoading: false, error: null }
    default:
      return state
  }
}
