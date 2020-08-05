import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Calories.css";

const useStyles = (theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Calories extends React.Component {
  state = {
    calories: 0,
    weight: 0,
    steps: 0,
    show: false,
  };

  onCaloriesEntered = (e) => {
    this.setState({
      calories: Number(e.target.value),
    });
  };

  onWeightEntered = (e) => {
    this.setState({
      weight: Number(e.target.value),
    });
  };

  onCalculateClicked = (e) => {
    const { calories, weight } = this.state;
    e.preventDefault();
    const countSteps = 2000 / 0.57;
    let caloriesCount = countSteps * calories;
    let finalSteps = caloriesCount / weight;
    this.setState({
      steps: Math.floor(Number(finalSteps)),
      show: true,
    });
  };
  render() {
    const { classes } = this.props;
    const { steps, calories, show, error } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <span>Calories Consumed</span>
          <form
            onSubmit={this.onCalculateClicked}
            className={classes.form}
            validate="true"
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="calories"
              label="Enter Calories"
              name="calories"
              autoFocus
              type="number"
              required
              onChange={this.onCaloriesEntered}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="weight"
              label="Enter Weight in pounds"
              id="weight"
              required
              type="number"
              onChange={this.onWeightEntered}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Calculate
            </Button>
            {error && <div className="steps">Please enter a valid input</div>}
            {show && (
              <div className="steps">
                <p>It takes {Number(steps) ? steps : 0} Steps</p>
                <p>To burn {Number(steps) ? calories : 0} Calories</p>
              </div>
            )}
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Calories);
