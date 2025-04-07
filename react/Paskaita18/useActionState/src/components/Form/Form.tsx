import { useActionState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";

export default function Form() {
  const [state, submitAction, isPending] = useActionState(handleSubmit, {
    formData: {
      title: "pradinis title",
      body: "pradinis body",
    },
    error: undefined,
  });
  console.log(state);

  async function handleSubmit(prevState: unknown, formData: FormData) {
    try {
      await wait();
      const newState = {
        title: formData.get("title") as string,
        body: formData.get("body") as string,
      };

      return {
        formData: {
          title: "",
          body: "",
        },
      };
    } catch (error: unknown) {
      return {
        error: "Kazkoks errorass",
      };
    }
  }

  return (
    <form action={submitAction}>
      <input defaultValue={state.formData?.title} type="text" name="title" /> <br />
      <input defaultValue={state.formData?.body} type="text" name="body" /> <br />
      {/* <button type="submit" disabled={isPending}>
        {isPending ? "Loading..." : "Submit"}
      </button> */}
      <SubmitButton />
      {state?.error && <p>Error happened</p>}
    </form>
  );
}

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}
