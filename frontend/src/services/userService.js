import { api, requestConfig} from "../utils/config";

//Get user details
const getUserDetails = async (id) => {
    const config = requestConfig("GET");
    
    try {
        const res = await fetch(api + "/users/login/" + id,  config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error);
    }
}

const userService = {
    getUserDetails
}

export default userService;