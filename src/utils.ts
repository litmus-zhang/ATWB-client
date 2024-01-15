import axios from "axios";


const baseInstance = axios.create({
    baseURL: " URL of ESP32 or IP Address goes here"
});
export const moveForward = async () =>{
    return baseInstance.get('/forward')
};
export const moveBackward = async () =>{
    return baseInstance.get('/backward')

};
export const moveLeft = async () =>{
    return baseInstance.get('/left')
};
export const moveRight = async () =>{
    return baseInstance.get('/right')
};
export const Stop = async () =>{
    return baseInstance.get('/stop')
};


export const MoveAutonomously = async () =>{
    return baseInstance.get('/autonomous')
};

export const OpenLid =async () => {
    return baseInstance.post('/open-lid')
}

export const CloseLid =async () => {
    return baseInstance.post('/close-lid')
}