import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Error 404. Page not found</h1>
      <Link to="/contacts">Back to Contacts page</Link>
    </>
  )
}

export default NotFound
