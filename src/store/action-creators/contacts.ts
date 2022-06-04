import { Dispatch } from "redux";
import axios from "axios";
import { ContactsAction, ContactsActionTypes } from "../../types/contacts";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    try {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({ type: ContactsActionTypes.FETCH_CONTACTS_ERROR, payload: 'Something went wrong. Please try again later.' })
    }
  }
}
