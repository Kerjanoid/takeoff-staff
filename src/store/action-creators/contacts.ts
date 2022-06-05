import { Dispatch } from "redux";
import axios from "axios";
import { ContactsAction, ContactsActionTypes, IContact } from "../../types/contacts";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS })
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, payload: { contacts: response.data, searchedContacts: response.data } })
    } catch (e) {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_ERROR, payload: "Something went wrong. Please try again later." })
    }
  }
}

export const search = (contacts: IContact[], text: string) => {
  return (dispatch: Dispatch<ContactsAction>) => {
    const searchedContacts = contacts.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
    dispatch({ type: ContactsActionTypes.SEARCH_CONTACTS, payload: { contacts, searchedContacts } })
  }
}
