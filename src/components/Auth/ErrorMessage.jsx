const ErrorMessage = ({ error }) => {
    return error ? <p className="error-message">{error}</p> : null;
  };

  export default ErrorMessage;