import { Cancel, Save } from "@mui/icons-material";
import { Box, Typography, Modal, TextField, Button } from "@mui/material";
import { IContact } from "../../types/contacts";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 320,
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid rgba(61, 92, 145, .2);",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

interface PopupModalProps {
  isModalOpen: boolean;
  contact?: IContact;
  handleSubmit: (e: React.FormEvent) => void;
  handleCancel: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isModalOpen,
  contact,
  handleSubmit,
  handleCancel,
}) => {
  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style} onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Fill the contact details
        </Typography>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          margin="normal"
          size="small"
          defaultValue={contact?.name || ""}
          inputProps={{ minLength: 3, maxLength: 35 }}
          fullWidth
          required
        />
        <TextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          size="small"
          defaultValue={contact?.username || ""}
          inputProps={{ minLength: 3, maxLength: 25 }}
          fullWidth
          required
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          size="small"
          defaultValue={contact?.email || ""}
          inputProps={{ minLength: 7, maxLength: 25 }}
          fullWidth
          required
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          variant="outlined"
          margin="normal"
          size="small"
          defaultValue={contact?.phone || ""}
          fullWidth
        />
        <TextField
          id="website"
          name="website"
          label="Website"
          variant="outlined"
          margin="normal"
          size="small"
          defaultValue={contact?.website || ""}
          fullWidth
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button variant="contained" type="submit" startIcon={<Save />}>
            Save
          </Button>
          <Button
            color="error"
            variant="contained"
            type="button"
            startIcon={<Cancel />}
            sx={{ ml: 2 }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopupModal;
