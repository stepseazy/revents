import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    let {
      input: { value, onChange, ...restInput },
      width,
      placeholder,
      meta: { touched, error },
      ...rest
    } = this.props;

    if (value) {
      value = moment(value, "X");
    }
    return (
      <Form.Field error={touched && !!error} width={width}>
        <DatePicker
          {...rest}
          placeholderText={placeholder}
          selected={this.state.startDate}
          onChange={this.handleChange}
          {...restInput}
        />
        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default DateInput;
