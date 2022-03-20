import * as React from 'react';
import {Box,
        Grid,
        List,
        Card,
        CardHeader,
        ListItem,
        ListItemText,
        ListItemIcon,
        Checkbox,
        Button,
        Divider,
        Typography,
        TextField} from '@mui/material';
import { withStyles } from "@mui/styles";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const FTypography = withStyles({
  root: {
      margin: "2% 9%",
      fontSize: "1rem",
      color: "#000",
      fontFamily: "Poppins",
      fontWeight: "bolder"
    },
})(Typography);

const FTextField = withStyles({
  root: {
      backgroundColor: "#C4C4C4", 
      fontSize: "0.8rem",

  },
  })(TextField);

export default function TransferList() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3, 4, 5]);
  const [right, setRight] = React.useState([6, 7, 8, 9]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 250,
          height: 350,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Question ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

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
      Add Questions to Scheduled Quiz
    </Typography>
    <Typography
      sx={{ textAlign: "center", fontSize: "1rem", margin: "2px" }}
    >
      Select the Questions to finally publish the Quiz
    </Typography>
    <Box
        component="form"
        autoComplete="off"
        sx={{
          margin: "20px",
          marginLeft: "19%",
          backgroundColor: "#f2f2f4",
          borderRadius: "30px",
          width: "60%",
          '& .MuiTextField-root': {ml: 9, width: '65ch', fontFamily: 'Poppins'},
        }}
      >
        <br></br>
        <FTypography > Quiz Title</FTypography>
        <FTextField
          id="qtitle" 
          variant="filled"
          size="small"
          InputProps={{
            style: {
                color: "#343434",
                fontWeight: "bolder"
            }
        }}
        required
        />
        <br></br>
        <br></br>
        <FTypography>Question Handling</FTypography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList('Included Ques', left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="left">
          <Button
            sx={{ my: 0.5, background: '#FFFD1B', color: '#000', borderRadius: '30px'}}
            variant="filled"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5, background: '#FFFD1B', color: '#000', borderRadius: '30px'}}
            variant="filled"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList('Available Ques', right)}</Grid>
    </Grid>
    <br></br>
    <br></br>
    </Box>
    </Box>
  );
}