
function baseUrl(path) {
    return process.env.APP_URL.replace(/\/$/, '')
        + '/'
        + path.replace(/^\//, '')
}

module.exports = baseUrl;