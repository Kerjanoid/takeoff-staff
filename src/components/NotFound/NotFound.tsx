import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <h1>Error 404. Page not found</h1>
      <Link to='/'>Back to Main page</Link>
    </>
  )
}

export default NotFound
