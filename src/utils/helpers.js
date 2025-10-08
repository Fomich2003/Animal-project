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

export { saveCoockie, checkCookie }