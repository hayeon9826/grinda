import { User } from "@schema";
import axios from "axios";
import { useQuery } from "react-query";
import _ from "lodash";

export const getCurrentUser = () => {
    const {
        data: currentUser,
        isFetching,
        refetch,
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useQuery("currentUser", async () => {
        const { data } = await axios.get("/api/users?id=current");
        return data as User;
    });

    return { currentUser, isFetching, refetch };
};

export const authErrorMessage = (code) => {
    try {
        return `authError.${_.camelCase(code?.split("/")[1])}`;
    } catch (e) {
        console.log(e);
        return "알수 없는 에러가 발생했습니다.";
    }
};
