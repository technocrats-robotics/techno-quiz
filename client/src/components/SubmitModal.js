import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "1.5rem",
};

export default function SubmitModal(props) {
    const handleOpen = () => props.setIsOpen(props.openState);
    const handleClose = () => props.setIsOpen(!props.openState);

    const confirmSubmission = () => props.setIsConfirm(true);
    const handleSubmit = (e) => props.handleConfirm(e);

    return (
        <div>
            <Button onClick={handleOpen}></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.openState}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openState}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            {/* Text in a modal */}
                        </Typography>
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                        >
                            Do you want to submit?
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{
                                    marginLeft: "1.5rem",
                                    backgroundColor: "rgba(255,0,0,1)",
                                }}
                            >
                                Submit
                            </Button>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
