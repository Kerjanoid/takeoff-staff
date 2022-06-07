import { ContactsAction, ContactsActionTypes, ContactsState } from "../../types/contacts";

const initialState: ContactsState = {
  contacts: [],
  searchedContacts: [],
  isLoading: false,
  error: null
}

export const contactsReducer = (state = initialState, action: ContactsAction): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
      return { contacts: [], searchedContacts: [], isLoading: true, error: null }
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.TAKE_LOCAL_CONTACTS:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.SEARCH_CONTACTS:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.REMOVE_CONTACT:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.CHANGE_CONTACT:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.CREATE_CONTACT:
      return { contacts: action.payload.contacts, searchedContacts: action.payload.searchedContacts, isLoading: false, error: null }
    case ContactsActionTypes.FETCH_CONTACTS_ERROR:
      return { contacts: [], searchedContacts: [], isLoading: false, error: null }
    default:
      return state
  }
}

