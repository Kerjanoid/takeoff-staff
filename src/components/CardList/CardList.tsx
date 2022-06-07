import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CircularProgress, Box, Typography } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";
import { IContact } from "../../types/contacts";
import ContactCard from "../ContactCard/ContactCard";

const CardList: React.FC = () => {
  const { searchedContacts, isLoading, error } = useTypedSelector(
    (state) => state.contacts
  );
  const { takeLocalContacts, removeContact } = useActions();

  const removeHandler = (contact: IContact) => {
    removeContact(contact.id, searchedContacts);
  };

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
          px: "25px",
        }}
      >
        Nothing was found. Change the search query or add new contact.
      </Typography>
    </Box>
  );

  return (
    <>
      {isLoading && loader}
      {error && errorMessage}
      {searchedContacts.length
        ? searchedContacts.map((contact) => (
            <ContactCard
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
