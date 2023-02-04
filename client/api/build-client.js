import axios from 'axios';

const buildClient = ({ req }) => {
    if (process.browser) {
        return axios.create({
            baseURL: '/',
        });
    }

    const namespace = 'ingress-nginx';
    const service = 'ingress-nginx-controller';

    return axios.create({
        baseURL: `http://${service}.${namespace}.svc.cluster.local`,
        headers: req.headers,
    });
};

export default buildClient;
