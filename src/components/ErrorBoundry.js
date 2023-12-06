import React, { useState, useEffect } from "react";

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const componentDidCatch = () => {
      setHasError(true);
    };

    window.addEventListener("error", componentDidCatch);
    return () => {
      window.removeEventListener("error", componentDidCatch);
    };
  }, []);

  if (hasError) {
    return <h1>Ooops. That is not good</h1>;
  }

  return props.children;
};

export default ErrorBoundary;
