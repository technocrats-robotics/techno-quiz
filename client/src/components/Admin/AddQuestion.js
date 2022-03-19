import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAddQuestionMutation } from "../../app/services/api";

function AddQuestion() {
  const [statement, setStatement] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  const [addQuestion, { isLoading }] = useAddQuestionMutation();

  let saveQuestion = async () => {

    if(!statement || !option1 || !option2 || !option3 || !option4 || !answer){
        alert('All fields are required!')
        return
    }

    // data santization
    statement = statement.trim()
    option1 = option1.trim()
    option2 = option2.trim()
    option3 = option3.trim()
    option4 = option4.trim()
    answer = answer.trim()

    // data object
    let data = {
      statement,
      options: [option1, option2, option3, option4],
      answer: answer,
    };

    try {
      let res = await addQuestion(data).unwrap();
      console.log(res);
      alert(`${res.status} - ${res.message}`);
    } catch (err) {
      console.log("Error ", err);
    }
  };

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
        Welcome, Admin!
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}>
        Add Question !
      </Typography>
      <Box
        sx={{
          margin: "30px",
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "350px",
          padding: "50px",
        }}
      >
        <Stack
          component="form"
          sx={{
            width: "25ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          {/* statement */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Statement"
            onChange={(e) => setStatement(e.target.value)}
          />

          {/* option 1 */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Option 1"
            onChange={(e) => setOption1(e.target.value)}
          />
          {/* option 2 */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Option 2"
            onChange={(e) => setOption2(e.target.value)}
          />

          {/* option 3 */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Option 3"
            onChange={(e) => setOption3(e.target.value)}
          />

          {/* option 4 */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Option 4"
            onChange={(e) => setOption4(e.target.value)}
          />

          {/* answer */}
          <TextField
            hiddenLabel
            variant="filled"
            size="small"
            label="Answer"
            onChange={(e) => setAnswer(e.target.value)}
          />

          <Button variant="contained" onClick={saveQuestion}>
            Save
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default AddQuestion;
