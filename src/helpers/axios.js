//CALL MODULES AND METHODS
import axios from 'axios';

//CREATING INSTANCE
const instance = axios.create({ //EN DESARROLLO PUEDO COLOCAR 'http://localhost:4000' pero cuando paso a prouducción paso el link de producion del backend
    baseURL: 'https://tinder-mern-app-backend.herokuapp.com'
});

//EXPORTING INSTANCE
export default instance;