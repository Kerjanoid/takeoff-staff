import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { IContact } from "../../types/contacts";
import PopupModal from "../PopupModal/PopupModal";
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface ContactCardProps {
  contact: IContact;
  removeHandler: (contact: IContact) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  removeHandler,
}) => {
  const { contacts, searchedContacts } = useTypedSelector(
    (state) => state.contacts
  );
  const { changeContact } = useActions();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editContact = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const changedContact = {
      id: contact.id,
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website: formData.get("website") as string,
    };
    changeContact(contacts, searchedContacts, changedContact);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card sx={{ m: "15px" }}>
      <CardContent sx={{ px: "25px" }}>
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
          <Button
            size="small"
            variant="outlined"
            startIcon={<Edit />}
            onClick={editContact}
          >
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
      <PopupModal
        isModalOpen={isModalOpen}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        contact={contact}
      />
    </Card>
  );
};

export default ContactCard;
