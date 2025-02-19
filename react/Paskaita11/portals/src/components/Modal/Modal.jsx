import ReactDom from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, open, setOpen, title, footerText }) {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>{title}</div>
        <div>{children}</div>
        <div>
          {footerText} <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal"),
  );
}
