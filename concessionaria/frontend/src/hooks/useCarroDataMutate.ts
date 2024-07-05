import axios, { AxiosPromise } from "axios"
import { CarroData } from "../interfaces/CarroData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: CarroData): AxiosPromise<any> =>{
    const response = axios.post(API_URL + '/carro', data);
    return response;
}

export function useCarroData(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries('carro-data')
        }
    })

    return mutate;
}