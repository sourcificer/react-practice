import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true
          }),
        5000
      );
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          A error has been recording in the functioning of the website.{" "}
          <Link to="/"> Click here </Link> to return back to home page or wait
          for 5 seconds{" "}
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
