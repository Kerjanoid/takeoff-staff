import { Container, Box } from '@mui/material';
import CardList from '../CardList/CardList';
import Header from '../Header/Header';

const Contacts: React.FC = () => {

  return (
    <Container
      maxWidth='md'
      sx={{ my: '20px' }} >
      <Box sx={{
        border: '2px solid rgba(61, 92, 145, .2)',
        borderRadius: '5px',
        bgcolor: 'rgba(184, 229, 255, .1)',
        minHeight: '400px',
        overflow: 'hidden' }}>
        <Header />
        <CardList />
      </Box>
    </Container>
  )
}

export default Contacts;
