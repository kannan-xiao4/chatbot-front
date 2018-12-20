import Axios,{ AxiosInstance, AxiosPromise } from 'axios'

class ApiClient {

    private static client : AxiosInstance =  Axios.create({
            baseURL : 'http://localhost:3000',
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type' : 'application/json',
            },
    });

    public static Get(path: string) : AxiosPromise {
        return this.client.get(path);
    }

    public static Post(path: string, data: any ) : AxiosPromise {
        return this.client.post(path, data);
    }
}

export default ApiClient;