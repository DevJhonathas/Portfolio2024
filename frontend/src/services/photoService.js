import {api, requestConfig} from "../utils/config";

//Publiosh an user photo
const publishPhoto = async(data, token) => {
    const config = requestConfig("POST", data, token, true);

    try {
        const res = await fetch(api + "/projects", config)
            .then((res) => res.json())
            .catch((err) => err);

        return res;
    } catch (error) {
        console.log(error)
    }
}

//Get user photos
const getUserPhotos = async() => {
    const config = requestConfig("GET")

    try {
        const res = await fetch(api + "/projects/", config)
            .then((res) => res.json())
            .catch((err) => err);
        
        return res;
    } catch (error) {
        console.log(error)
    }
}

const photoService = {
    publishPhoto,
    getUserPhotos,
}

export default photoService;