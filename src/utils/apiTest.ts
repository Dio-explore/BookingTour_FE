import axios from '../config/axios';

// Test API connection
export const testApiConnection = async (): Promise<boolean> => {
    try {


        return true;
    } catch (error: any) {
        console.error('❌ API connection failed:', error.message);

        if (error.code === 'ERR_NETWORK') {
            console.error('💡 Suggestion: Make sure your backend server is accessible at', import.meta.env.VITE_API_URL || 'http://localhost:5267/api');
        }

        return false;
    }
};

// Test TourTemplate endpoints specifically
export const testTourTemplateEndpoints = async (): Promise<void> => {
    try {
        console.log('🔍 Testing TourTemplate endpoints...');

        // Test GET templates
        const response = await axios.get('/TourCompany/template');
        console.log('✅ GET /TourCompany/template successful:', response.status);

    } catch (error: any) {
        console.error('❌ TourTemplate endpoints test failed:', error.message);

        if (error.response?.status === 401) {
            console.error('💡 Authentication required. Make sure you have a valid token.');
        } else if (error.response?.status === 404) {
            console.error('💡 Endpoint not found. Check if the API path is correct.');
        }
    }
};

// Development helper to log current configuration
export const logApiConfig = (): void => {
    const isDev = import.meta.env.DEV;
    console.log('🔧 API Configuration:', {
        environment: isDev ? 'Development' : 'Production',
        baseURL: axios.defaults.baseURL,
        timeout: axios.defaults.timeout,
        headers: axios.defaults.headers
    });
};
