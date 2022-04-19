import { User } from "@schema";
import axios from "axios";
import { useQuery } from "react-query";

export const getCurrentUser = () => {
  const {
    data: currentUser,
    isFetching,
    refetch,
  } = useQuery("currentUser", async () => {
    const { data } = await axios.get("/api/users?id=current");
    return data as User;
  });

  return { currentUser, isFetching, refetch };
};
