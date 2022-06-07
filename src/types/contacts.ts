export interface IContact {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
      lat?: string,
      lng?: string
    }
  }
  phone?: string,
  website?: string,
  company?: {
    name?: string,
    catchPhrase?: string,
    bs?: string
  }
}

export interface ContactsState {
  contacts: IContact[],
  searchedContacts: IContact[],
  isLoading: boolean,
  error: null | string
}
export enum ContactsActionTypes {
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  TAKE_LOCAL_CONTACTS = "TAKE_CONTACTS",
  SEARCH_CONTACTS = "SEARCH_CONTACTS",
  REMOVE_CONTACT = "REMOVE_CONTACT",
  CHANGE_CONTACT = "CHANGE_CONTACT",
  CREATE_CONTACT = "CREATE_CONTACT",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
}
interface FetchContactsAction {
  type: ContactsActionTypes.FETCH_CONTACTS;
}
interface FetchContactsSuccessAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface SearchContactsAction {
  type: ContactsActionTypes.SEARCH_CONTACTS;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface TakeLocalContactsAction {
  type: ContactsActionTypes.TAKE_LOCAL_CONTACTS;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface RemoveContactAction {
  type: ContactsActionTypes.REMOVE_CONTACT;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface ChangeContactAction {
  type: ContactsActionTypes.CHANGE_CONTACT;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface CreateContactAction {
  type: ContactsActionTypes.CREATE_CONTACT;
  payload: { contacts: IContact[], searchedContacts: IContact[] };
}
interface FetchContactsErrorAction {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

export type ContactsAction = FetchContactsAction | FetchContactsSuccessAction | SearchContactsAction | TakeLocalContactsAction | RemoveContactAction | CreateContactAction | FetchContactsErrorAction | ChangeContactAction
