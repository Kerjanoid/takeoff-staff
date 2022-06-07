import { Box, Button } from "@mui/material";

interface AddNewContactProps {
  addNewContactHandler: () => void;
}

const AddNewContact: React.FC<AddNewContactProps> = ({
  addNewContactHandler,
}) => {
  return (
    <Box
      sx={{
        mt: "20px",
        textAlign: "center",
      }}
    >
      <Button
        onClick={addNewContactHandler}
        variant="outlined"
        sx={{
          fontSize: "18px",
          px: "60px",
        }}
      >
        Add new contact
      </Button>
    </Box>
  );
};

export default AddNewContact;
