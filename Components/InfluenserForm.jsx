'use client'

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField, MenuItem, Checkbox, FormControlLabel, RadioGroup, Radio, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Basic Details", "Social Media Details", "Content & Audience", "Additional Information"];

const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  userId: Yup.string().required("User ID is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  instagramId: Yup.string(),
  followers: Yup.number(),
  youtubeId: Yup.string(),
  youtubeSubscribers: Yup.number(),
  description: Yup.string(),
  category: Yup.array(),
  website: Yup.string().url("Invalid URL"),
  collaborationType: Yup.array(),
  contactPreference: Yup.string().required("Preferred contact method is required"),
  profileImage: Yup.mixed(),
  verificationDocument: Yup.mixed()
});

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Formik
      initialValues={{
        name: "",
        userId: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        instagramId: "",
        followers: "",
        youtubeId: "",
        youtubeSubscribers: "",
        description: "",
        category: [],
        website: "",
        collaborationType: [],
        contactPreference: "",
        profileImage: null,
        verificationDocument: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <>
              <Field name="name" as={TextField} label="Full Name"  />
              <Field name="userId" as={TextField} label="User ID"  />
              <Field name="email" as={TextField} label="Email"  />
              <Field name="phone" as={TextField} label="Phone"  />
              <Field name="dob" as={TextField} label="Date of Birth" type="date"  InputLabelProps={{ shrink: true }} />
              <RadioGroup name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </>
          )}

          {activeStep === 1 && (
            <>
              <Field name="instagramId" as={TextField} label="Instagram Username" fullWidth />
              <Field name="followers" as={TextField} label="Instagram Followers" fullWidth type="number" />
              <Field name="youtubeId" as={TextField} label="YouTube Channel" fullWidth />
              <Field name="youtubeSubscribers" as={TextField} label="YouTube Subscribers" fullWidth type="number" />
            </>
          )}

          {activeStep === 2 && (
            <>
              <Field name="description" as={TextField} label="Description/Bio" fullWidth multiline rows={4} />
              <Field name="category" as={Checkbox} type="checkbox" value="Fashion" label="Fashion" />
              <Field name="category" as={Checkbox} type="checkbox" value="Tech" label="Tech" />
              <Field name="category" as={Checkbox} type="checkbox" value="Fitness" label="Fitness" />
              <Field name="category" as={Checkbox} type="checkbox" value="Sports" label="Sports" />
              <Field name="category" as={Checkbox} type="checkbox" value="Food" label="Food" />
            </>
          )}

          {activeStep === 3 && (
            <>
              <Field name="website" as={TextField} label="Website/Portfolio" fullWidth />
              <Field name="collaborationType" as={Checkbox} type="checkbox" value="Paid Ads" label="Paid Ads" />
              <Field name="collaborationType" as={Checkbox} type="checkbox" value="Affiliate Marketing" label="Affiliate Marketing" />
              <Field name="collaborationType" as={Checkbox} type="checkbox" value="Product Reviews" label="Product Reviews" />
              <Field name="contactPreference" as={TextField} select label="Preferred Contact Method" fullWidth>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
              </Field>
              <input type="file" onChange={(e) => setFieldValue("profileImage", e.currentTarget.files[0])} />
              <input type="file" onChange={(e) => setFieldValue("verificationDocument", e.currentTarget.files[0])} />
            </>
          )}

          <div>
            {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
            {activeStep < steps.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button type="submit">Submit</Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
