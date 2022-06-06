import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { IContact } from "../../types/contacts";

interface SignInProps {
  contact: IContact,
  removeHandler: (contact: IContact) => void
}

const UserCard: React.FC<SignInProps> = ({
  contact,
  removeHandler
}) => {

  return (
    <Card sx={{ m: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {contact.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {contact.email}
        </Typography>
        {contact.phone && (
          <Typography variant="body2" color="text.secondary">
            Phone: {contact.phone}
          </Typography>
        )}
        {contact.website && (
          <Typography variant="body2" color="text.secondary">
            Website: {contact.website}
          </Typography>
        )}
        <Box sx={{ mt: 2 }}>
          <Button size="small" variant="outlined" startIcon={<Edit />}>
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            variant="outlined"
            startIcon={<Delete />}
            sx={{ ml: 2 }}
            onClick={() => removeHandler(contact)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
