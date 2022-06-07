import { Container, Box } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddNewContact from "../AddNewContact/AddNewContact";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import PopupModal from "../PopupModal/PopupModal";

const Contacts = () => {
  const { contacts, searchedContacts } = useTypedSelector(
    (state) => state.contacts
  );
  const { createContact } = useActions();
  const { isLoggedIn } = useTypedSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/takeoff-staff/sign-in" replace />;
  }

  const addNewContactHandler = () => {
    setIsModalOpen(true);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const contactsIdArray = contacts.map((item) => item.id);
    const newId =
      Math.max.apply(null, contactsIdArray) >= 0
        ? Math.max.apply(null, contactsIdArray) + 1
        : 0;
    const newContact = {
      id: newId,
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
    };
    createContact(contacts, searchedContacts, newContact);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ my: "20px" }}>
      <Box
        sx={{
          border: "2px solid rgba(61, 92, 145, .2)",
          borderRadius: "5px",
          bgcolor: "rgba(184, 229, 255, .1)",
          minHeight: "400px",
          overflow: "hidden",
        }}
      >
        <Header />
        <AddNewContact addNewContactHandler={addNewContactHandler} />
        <CardList />
        <PopupModal
          isModalOpen={isModalOpen}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </Box>
    </Container>
  );
};

export default Contacts;
