import { useRef, useState } from "react";

export default function Form2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validationErros, setValidationErros] = useState({
    name: "",
    email: "",
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setValidationErros({
      name: "",
      email: "",
    });

    if (name.length < 3) {
      setValidationErros((prev) => ({ ...prev, name: "Name is too short" }));
      nameInputRef.current.focus();
      return;
    }

    if (name.length > 20) {
      setValidationErros((prev) => ({ ...prev, name: "Name is too long" }));
      nameInputRef.current.focus();
      return;
    }

    if (!emailRegex.test(email)) {
      setValidationErros((prev) => ({ ...prev, email: "Email is not valid" }));
      emailInputRef.current.focus();
      return;
    }

    console.log("Form submitted");
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="input-name">Name</label>
      <input ref={nameInputRef} type="text" id="input-name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
      {validationErros.name && <p>{validationErros.name}</p>}
      <label htmlFor="input-email">Email</label>
      <input ref={emailInputRef} type="email" id="input-email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      {validationErros.email && <p>{validationErros.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
