const proxy = [
    {
        context: '/exemplo-cadastro/webapi',
        target: 'http://localhost:8080',
        pathRewrite: {'/exemplo-cadastro/webapi' : ''}
    }
];

module.exports = proxy;

