import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert() {
  const { alertName, handleCloseAlert } = useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(handleCloseAlert, 3000);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} added to cart</div>
    </div>
  );
}

export { Alert };
