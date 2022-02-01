import { Box, Typography, Button} from "@mui/material";
import Badge from "../Badge";
import React from "react";

function Content() {
  return (
    <Box
      sx={{
       
        minHeight: "100vh",
        height: "100%",
        width: "100%",
        backgroundColor: "#050022",
        color: "white",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "2rem",
          marginTop: "80px",
        }}
      >
        Modify (Dept) Quiz
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
      >
        Select the Quiz
      </Typography>
      <Box sx={{ width: '80%', margin:"2% 15%", display: "grid", gridTemplateColumns: "auto auto"}} >
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "70%",
          marginBottom: "5%"
        }}
      >
        <br></br>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            color: "#000",
          }}
        >
          DD-MM-YYYY: Quiz 1
        </Typography>
        <Typography
          sx={{
            margin: "20px 15px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          fermentum vitae, sit tincidunt aenean eu. Sed neque auctor purus
          pretium pharetra donec vel felis. Nisl placerat vel, nulla tempor id
          a. Elementum urna quis donec faucibus et, vitae nec. In risus lectus
          ultricies sit. Morbi urna orci.
        </Typography>
        <Button sx={{width: "100%"}}>
          <Badge
            content="Select"
            logout
            style={{
              color: "#000",
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "75%",
          marginBottom: "5%"
        }}
      >
        <br></br>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            color: "#000",
          }}
        >
          DD-MM-YYYY: Quiz 2
        </Typography>
        <Typography
          sx={{
            margin: "20px 15px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          fermentum vitae, sit tincidunt aenean eu. Sed neque auctor purus
          pretium pharetra donec vel felis. Nisl placerat vel, nulla tempor id
          a. Elementum urna quis donec faucibus et, vitae nec. In risus lectus
          ultricies sit. Morbi urna orci.
        </Typography>
        <Button sx={{width: "100%"}}>
          <Badge
            content="Select"
            logout
            style={{
              color: "#000",
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </Button>
        </Box>
        <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "70%",
          marginBottom: "5%"
        }}
      >
        <br></br>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            color: "#000",
          }}
        >
          DD-MM-YYYY: Quiz 3
        </Typography>
        <Typography
          sx={{
            margin: "20px 15px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          fermentum vitae, sit tincidunt aenean eu. Sed neque auctor purus
          pretium pharetra donec vel felis. Nisl placerat vel, nulla tempor id
          a. Elementum urna quis donec faucibus et, vitae nec. In risus lectus
          ultricies sit. Morbi urna orci.
        </Typography>
        <Button sx={{width: "100%"}}>
          <Badge
            content="Select"
            logout
            style={{
              color: "#000",
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "75%",
          marginBottom: "5%"
        }}
      >
        <br></br>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bolder",
            color: "#000",
          }}
        >
          DD-MM-YYYY: Quiz 4
        </Typography>
        <Typography
          sx={{
            margin: "20px 15px",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#000",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          fermentum vitae, sit tincidunt aenean eu. Sed neque auctor purus
          pretium pharetra donec vel felis. Nisl placerat vel, nulla tempor id
          a. Elementum urna quis donec faucibus et, vitae nec. In risus lectus
          ultricies sit. Morbi urna orci.
        </Typography>
        <Button sx={{width: "100%"}}>
          <Badge
            content="Select"
            logout
            style={{
              color: "#000",
              textAlign: "center",
              cursor: "pointer",
            }}
          />
        </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
