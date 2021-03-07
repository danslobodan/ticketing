import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);

    return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
    if (process.browser) {
        const response = await axios.get('/api/users/currentuser');
        return response.data;
    }

    const namespace = 'ingress-nginx';
    const service = 'ingress-nginx-controller';
    const domain = `${service}.${namespace}.svc.cluster.local`;

    const { data } = await axios.get(`http://${domain}/api/users/currentuser`, {
        headers: req.headers,
    });
    return data;
};

export default LandingPage;
