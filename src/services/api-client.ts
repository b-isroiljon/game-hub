import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '613e5fd5d4d041ce93ed145d33dece9d'
    }
})