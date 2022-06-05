import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface SignInProps {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

const UserCard: React.FC<SignInProps> = ({
  name,
  username,
  email,
  phone,
  website,
}) => {
  return (
    <Card sx={{ m: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Username: {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
        {phone && (
          <Typography variant="body2" color="text.secondary">
            Phone: {phone}
          </Typography>
        )}
        {website && (
          <Typography variant="body2" color="text.secondary">
            Website: {website}
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
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
