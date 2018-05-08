import axios from 'axios'

export default function minhaFuncao(cep) {
    const request = axios.get('http://viacep.com.br/ws/'+cep+'/json/')
    return {
        type: 'GET_CEP',
        payload: request
    }
}