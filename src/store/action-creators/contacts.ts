import { Dispatch } from "redux";
import axios from "axios";
import { ContactsAction, ContactsActionTypes, IContact } from "../../types/contacts";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      localStorage.setItem("contacts", JSON.stringify(response.data))
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, payload: { contacts: response.data, searchedContacts: response.data } })
    } catch (e) {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_ERROR, payload: "Something went wrong. Please try again later." })
    }
  }
}

export const searchContacts = (text: string) => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const contacts: IContact[] = JSON.parse(localStorage.getItem("contacts") || '{}')
    const searchedContacts = contacts.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    dispatch({ type: ContactsActionTypes.SEARCH_CONTACTS, payload: { contacts, searchedContacts } })
  }
}

export const takeLocalContacts = () => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const localContacts: IContact[] = JSON.parse(localStorage.getItem("contacts") || '{}')
    dispatch({ type: ContactsActionTypes.TAKE_LOCAL_CONTACTS, payload: { contacts: localContacts, searchedContacts: localContacts } })
  }
}

export const removeContact = (id: number, searchedContacts: IContact[]) => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const contacts: IContact[] = JSON.parse(localStorage.getItem("contacts") || '{}')
    const filteredContacts: IContact[] = contacts.filter(item => item.id !== id)
    const filteredSearchedContacts: IContact[] = searchedContacts.filter(item => item.id !== id)
    localStorage.setItem("contacts", JSON.stringify(filteredContacts))
    dispatch({ type: ContactsActionTypes.REMOVE_CONTACT, payload: { contacts: filteredContacts, searchedContacts: filteredSearchedContacts } })
  }
}

export const changeContact = (contacts: IContact[], searchedContacts: IContact[], changedContact: IContact) => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const changedContacts = contacts.map(contact => contact.id !== changedContact.id ? contact : changedContact);
    localStorage.setItem("contacts", JSON.stringify(changedContacts))
    const changedSearchedContacts = searchedContacts.map(contact => contact.id !== changedContact.id ? contact : changedContact);
    dispatch({ type: ContactsActionTypes.CHANGE_CONTACT, payload: { contacts: changedContacts, searchedContacts: changedSearchedContacts } })
  }
}

export const createContact = (contacts: IContact[], searchedContacts: IContact[], newContact: IContact) => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const changedContacts = [...contacts, newContact]
    localStorage.setItem("contacts", JSON.stringify(changedContacts))
    const changedSearchedContact = [...searchedContacts, newContact]
    dispatch({ type: ContactsActionTypes.CHANGE_CONTACT, payload: { contacts: changedContacts, searchedContacts: changedSearchedContact } })
  }
}
