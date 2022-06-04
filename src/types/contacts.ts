interface IContact {
  id:	number,
  name:	string,
  username:	string,
  email:	string,
  address?: {
    street?:	string,
    suite?:	string,
    city?:	string,
    zipcode?:	string,
    geo?: {
      lat?:	string,
      lng?:	string
    }
  }
  phone?:	string,
  website?:	string,
  company?: {
    name?:	string,
    catchPhrase?:	string,
    bs?:	string
  }
}

export interface ContactsState {
  contacts: IContact[],
  isLoading: boolean,
  error: null | string
}
export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
}
interface FetchContactsAction {
  type: ContactsActionTypes.FETCH_CONTACTS;
}
interface FetchContactsSuccessAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: IContact[];
}
interface FetchContactsErrorAction {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

export type ContactsAction = FetchContactsAction | FetchContactsSuccessAction | FetchContactsErrorAction
