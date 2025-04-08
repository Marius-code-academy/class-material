import { useActionState } from "react";
import { InputData, sendFormData } from "../../api";

type FormState = {
  error: string | null;
  inputData: InputData;
};

export const Form = () => {
  const formSubmit = async (prev: FormState, formData?: FormData) => {
    const inputData = formData
      ? (Object.fromEntries(formData?.entries()) as unknown as InputData)
      : {
          name: "",
          email: "",
          age: null,
        };

    const error = await sendFormData(inputData);

    if (error) {
      return {
        ...prev,
        error,
      };
    }

    const currentFormState: FormState = {
      ...prev,
      error: null,
      inputData: inputData,
    };

    return currentFormState;
  };

  const [state, formAction, isPending] = useActionState<FormState>(formSubmit, {
    error: null,
    inputData: {
      name: "",
      email: "",
      age: null,
    },
  });

  return (
    <form action={formAction}>
      <input type="text" name="name" /> <br />
      <input type="email" name="email" /> <br />
      <input type="number" name="age" /> <br />
      <button type="submit">Register</button>
      <p>{state.error}</p>
    </form>
  );
};
