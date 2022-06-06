import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CircularProgress, Box, Typography } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { IContact } from "../../types/contacts";

const CardList: React.FC = () => {
  const { searchedContacts, isLoading, error } = useTypedSelector(
    (state) => state.contacts
  );
  const { takeLocalContacts, remove } = useActions();

  const removeHandler = (contact: IContact) => {
    remove(contact.id, searchedContacts)
  }

  useEffect(() => {
    takeLocalContacts();
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
        ? searchedContacts.map((contact) => (
            <UserCard
              key={contact.id}
              contact={contact}
              removeHandler={removeHandler}
            />
          ))
        : nothingMessage}
    </>
  );
};

export default CardList;
