import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CircularProgress, Box, Typography } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

const CardList: React.FC = () => {
  const { searchedContacts, isLoading, error } = useTypedSelector(
    (state) => state.contacts
  );
  const { fetchContacts } = useActions();

  useEffect(() => {
    fetchContacts();
  }, []);

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

  const nothingMessage = (
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
        Nothing was found. Change the search query.
      </Typography>
    </Box>
  );

  return (
    <>
      {isLoading && loader}
      {error && errorMessage}
      {searchedContacts.length
        ? searchedContacts.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
            />
          ))
        : nothingMessage}
    </>
  );
};

export default CardList;
