import React, { Component } from "react";
import {
  Segment,
  Form,
  Header,
  Divider,
  Button,
  Label
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../../app/common/form/TextInput";
import RadioInput from "../../../app/common/form/RadioInput";

class BasicPage extends Component {
  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Form.Group inline>
            <Label>Gender: </Label>
            <Field
              type="radio"
              name="gender"
              component={RadioInput}
              label="Male"
              value="male"
            />
            <Field
              type="radio"
              name="gender"
              component={RadioInput}
              label="Female"
              value="female"
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Date of Birth"
            dateFormat="YYYY-MM-dd"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
            maxDate={new Date().setFullYear(new Date().getFullYear() - 18)}
          />
          <Field
            name="city"
            placeholder="Home Town"
            options={{ types: ["(cities)"] }}
            label="Female"
            component={PlaceInput}
            width={8}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: "userProfile", enableReinitialize: true })(
  BasicPage
);
