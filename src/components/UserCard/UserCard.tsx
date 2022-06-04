import { Card, CardContent, Typography } from "@mui/material";

interface SignInProps {
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

const UserCard: React.FC<SignInProps> = ({ name, username, email, phone, website,}) => {
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
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Website: {website}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
