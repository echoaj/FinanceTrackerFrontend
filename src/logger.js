import axios from 'axios';

var time = new Date();

const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "TABLET";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "MOBILE";
    }
    return "DESKTOP";
};

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

const log = function (string, oneline = true) {
    const timestamp = getFormattedTime();
    const baseURL = process.env.REACT_APP_LOGS_URL;
    const endpoint = "/api/logger";
    const url = baseURL + endpoint;
    const deviceType = getDeviceType();
    let payload = {};

    if (oneline) {
        const key = timestamp[0] + ' ' + timestamp[1] + ` ${deviceType}`;
        payload[key] = string;
    } else {
        payload["Device"] = deviceType;
        payload["Date"] = timestamp[0];
        payload["Time"] = timestamp[1];
        payload["Log"] = string;
    }

    axios.post(url, payload);
};

export default log;