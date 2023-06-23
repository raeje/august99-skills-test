import axios from "axios";

const URL = "https://api.spacexdata.com/v4/launches/";

const getLaunchData = async () => {
  return await axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => error);
};

export { getLaunchData };
