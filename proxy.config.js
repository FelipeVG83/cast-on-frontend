const proxy = [{
    context: '/artistas',
    target: 'http://localhost:8080',
    changeOrigin: false
}];
module.exports = proxy;