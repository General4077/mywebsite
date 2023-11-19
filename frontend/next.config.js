module.exports = {
    output: 'standalone',
    serverRuntimeConfig: {
        // Will only be available on the server side
        apiUrl: process.env.apiUrl,
        hostUrl: process.env.hostUrl,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        hostUrl: process.env.hostUrl,
    },
}