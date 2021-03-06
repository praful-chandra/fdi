import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function LoadingToRedirectRoute() {
  const [count, setCount] = useState(10);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((oldCount) => --oldCount);
    }, 1000);

    count === 0 && history.push("/");

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="container p-5 text-center">
      <p>Redirecting you in {count} Seconds</p>
    </div>
  );
}

export default LoadingToRedirectRoute;
