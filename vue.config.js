module.exports = {
    devServer: {
        '^/api': {
            target: 'http://39.106.73.59:8081',
            ws: false
        },
    }
}