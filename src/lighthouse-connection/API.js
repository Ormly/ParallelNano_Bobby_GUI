import axios from "axios";

const baseDomain = "https://0d4251c9-343e-4221-ab7e-4306f4aff60d.mock.pstmn.io";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
