import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setIsLoading(true);
      toast.success("logged out successfully");
      localStorage.removeItem("grey-labs");
      setAuth(null);
      navigate("/login");
    } catch (error) {
      toast.error("error occured");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return { handleLogout, isLoading };
}

export default useLogout;
