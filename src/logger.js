import axios from 'axios';

var time = new Date();

const getFormattedTime = function () {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const date = `${month}/${day}/${year}`;
    const curTime = `${hour}:${minute}:${second}`;
    return [date, curTime];
};

const log = function (string, oneline=true) {
    const timestamp = getFormattedTime();
    const baseURL = "https://logging-service-py.herokuapp.com";
    const endpoint = "/api/logger";
    const url = baseURL + endpoint;
    let payload = {};

    if (oneline) {
        const key = timestamp[0] + " " + timestamp[1];
        payload[key] = string;
    } else {
        payload["Date"] = timestamp[0];
        payload["Time"] = timestamp[1];
        payload["Log"] = string;
    }

    axios.post(url, payload);
};

export default log;