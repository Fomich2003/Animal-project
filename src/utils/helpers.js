function saveCoockie(name, value, time) {
    document.cookie = `${name}=${value}; max-age=${time}`
}

function checkCookie(name) {
    const cookies = document.cookie.split(';').map(c => c.trim());
    for (let cookie of cookies) {
        if (cookie.startsWith(name + '=')) {
            return true;
        }
    }
    return false;
}

function generateRandomNumber(min, max) {
    if (min >= max) return 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { saveCoockie, checkCookie, generateRandomNumber }