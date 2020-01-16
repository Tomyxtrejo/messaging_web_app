import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  name,
  value,
  placeholder,
  onChange,
  icon,
  type,
  id,
  label,
  error
}) => {
  return (
    <div className="form-group">
      <small className="form-text text-left small text-muted">{label}</small>
      <input
        className="form-control form-control-lg input_common"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={error ? "error-css" : ""}
      />
      {error && <small className="form-error-text text-left">{error}</small>}
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
