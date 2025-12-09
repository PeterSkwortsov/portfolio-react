const getBaseUrl = () => {
    if (window.location.hostname.includes('xn--')) {
        return '/'; // для IDN доменов
    }
    return process.env.PUBLIC_URL || '/';
};

export const BASE_URL = getBaseUrl();