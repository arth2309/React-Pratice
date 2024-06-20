import TextField from "@mui/material/TextField";
import { Formik, Field, Form } from "formik";
import { RegistrationDetails } from "../../Type";
import { useState } from "react";
import * as Yup from "yup";
import { Fragment } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import { FormControl } from "@mui/material";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";


const Registration = (props : any) => {
  const intialvalues: RegistrationDetails = {
    id : Math.random(),
    name: "",
    email: "",
    interested: "",
    number: 0,
    checked: [],
  };

  const validationschema = Yup.object().shape({
    name: Yup.string().required("Please enter Name"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Please enter email"),
    interested: Yup.string().required("interested field is required"),
    number: Yup.number()
      .min(0, "number should be positive")
      .max(4, "number should not be greater than 4")
      .required("please enter number"),
    checked: Yup.array().when("number", (value: any, schema) => {
      return schema.length(value[0], `it should contains exactly ${value[0]}`);
    }),
  });




  const detailsNavigate = useNavigate();
  

  const SubmitHandler = (values : RegistrationDetails) => 
    {
 
            props.onGetData(values);
            detailsNavigate('/Details');

  }

  return (
    <Fragment>
      <Container>
        <h2>Registration Details</h2>
        <Formik
          initialValues={intialvalues}
          validationSchema={validationschema}
          validateOnBlur={false}
          onSubmit={SubmitHandler}
        >
          {({ values, errors, touched }) => (
            <Form>
                <h3 style={{marginTop : '50px'}}>Personal Details :</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ width: "100%" }}
                    name="name"
                    label="Name"
                    error={errors.name && touched.name}
                    helperText={
                      errors.name && touched.name ? errors.name : null
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    style={{ width: "100%" }}
                    name="email"
                    label="Email"
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
              </Grid>
              <h3 style={{marginTop : '50px'}}>Sports Details :</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormLabel required style={{color : errors.interested && touched.interested ? 'red' : ''}} >interested </FormLabel>
                  <Field as={RadioGroup} name="interested" style = {{display : 'flex'}}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="no"
                    />
                 
                  </Field>
                </Grid>
                <Grid item xs={2}>
                  <Field
                    as={TextField}
                    type="number"
                    name="number"
                    label = "number"
                    disabled={!(values.interested === "yes")}
                    error={errors.number && touched.number}
                    helperText={
                      errors.number && touched.number ? errors.number : null
                    }
                  />
                </Grid>
                <Grid item xs={2}>
                  <Field as={FormGroup}>
                    <FormControlLabel
                      control={<Checkbox />}
                      name="checked"
                      disabled={!(values.interested === "yes")}
                      value="chess"
                      label="chess"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      name="checked"
                      disabled={!(values.interested === "yes")}
                      value="carrom"
                      label="carrom"
                    />
                    </Field>
                    </Grid>
                    <Grid item xs={2}>
                    <Field as={FormGroup}>
                    <FormControlLabel
                      control={<Checkbox />}
                      name="checked"
                      disabled={!(values.interested === "yes")}
                      value="ludo"
                      label="ludo"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      name="checked"
                      disabled={!(values.interested === "yes")}
                      value="Table Tennis"
                      label="Table Tennis"
                    />
                  </Field>
                  </Grid>
              
                {/* <Grid item xs = {3}>
                <Stack direction="row" spacing={1}>
              <Typography>Singles</Typography>
              <Switch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>Doubles</Typography>
            </Stack>
                </Grid> */}
              </Grid>

              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={values.checked.length !== values.number}
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </Fragment>
  );
};

export default Registration;
