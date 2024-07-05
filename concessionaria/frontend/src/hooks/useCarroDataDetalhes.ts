import axios, { AxiosResponse } from "axios";
import { CarroData } from "../interfaces/CarroData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (id: number): Promise<AxiosResponse<CarroData>> => {
    const response = await axios.get<CarroData>(`${API_URL}/carro/${id}`);
    return response;
}

export function useCarroDataDetalhes(id: number) {
    const query = useQuery<AxiosResponse<CarroData>, Error>({
        queryFn: () => fetchData(id),
        queryKey: ['carro-data', id],
    });

    return {
        ...query,
        data: query.data?.data
    };
}
