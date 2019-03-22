import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", scriptLoaded: false };
  }

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = onSelect => {
    return address => {
      if (onSelect) onSelect(address);
      this.setState({ address });
    };
  };

  render() {
    const {
      input: { name },
      width,
      onSelect,
      placeholder,
      searchOptions,
      meta: { touched, error },
      ...rest
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAcKLkAQ_7_XTUu-92PQB6Z48zBZMrivI&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            {...rest}
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect(onSelect)}
            searchOptions={searchOptions}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: placeholder,
                    className: "location-search-input"
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
        {touched && error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
