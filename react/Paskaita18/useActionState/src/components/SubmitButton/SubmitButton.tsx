import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending, data } = useFormStatus();

  console.log(data?.get("title"));

  return (
    <button disabled={pending} type="submit">
      Submit
    </button>
  );
}
