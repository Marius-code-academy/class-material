import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  async function onButtonClick() {
    try {
      const { data } = await axios.get("http://localhost:3000/test", { withCredentials: true });
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          navigate("/login");
        }
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}
