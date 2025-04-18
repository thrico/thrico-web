"use client";

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
    // Log the error to an error reporting service console
  }

  render() {
    if (this.state.hasError) {
      return <>dsds</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
