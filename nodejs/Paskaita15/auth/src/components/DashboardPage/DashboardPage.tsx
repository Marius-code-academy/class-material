import axios from "axios";

export default function DashboardPage() {
  async function onButtonClick() {
    try {
      await axios.get("http://localhost:3000/test", { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}
