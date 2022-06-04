import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CircularProgress, Box, Typography } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

const CardList: React.FC = () => {
  const { contacts, isLoading, error } = useTypedSelector(
    (state) => state.contacts
  );
  const { fetchContacts } = useActions();

  useEffect(() => {
    fetchContacts();
  }, [])

  const loader = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
      }}
    >
      <CircularProgress />
    </Box>
  );

  const errorMessage = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 15,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        {error}
      </Typography>
    </Box>
  );

  return (
    <>
      {isLoading && loader}
      {error && errorMessage}
      {contacts.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      ))}
    </>
  );
};

export default CardList;
