import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ServiceOrder {
    id: number;
    so_number: number;
    state: 'Aguardando orçamento' | 'Pendente aprovação' | 'Conserto negado' | 'Pendente conserto' | 'Consertado' | 'Consertado e retirado' | 'Sem conserto e retirado';
    client: string;
    createdAt: string;
}

interface CreateServiceOrderInput {
    state: 'Aguardando orçamento' | 'Pendente aprovação' | 'Conserto negado' | 'Pendente conserto' | 'Consertado' | 'Consertado e retirado' | 'Sem conserto e retirado';
    client: string;
}

interface ServiceOrderContextType {
    serviceOrder: ServiceOrder[];
    fetchServiceOrder: (query?: string) => Promise<void>;
    createServiceOrder: (data: CreateServiceOrderInput) => Promise<void>
}

interface ServiceOrderProviderProps {
    children: ReactNode
}

export const ServiceOrderContext = createContext({} as ServiceOrderContextType);

export function ServiceOrderProvider({ children }: ServiceOrderProviderProps) {
    const [serviceOrder, setServiceOrder] = useState<ServiceOrder[]>([]);

    async function fetchServiceOrder(query?: string) {
        const response = await api.get('/ServiceOrder', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setServiceOrder(response.data)
    }

    let soCounter = 1; // Contador global - retirar depois para buscar no backend

    async function createServiceOrder(data: CreateServiceOrderInput) {
        const { state, client } = data;

        const response = await api.post('ServiceOrder', {
            client,
            state,
            so_number: soCounter++,
            createdAt: new Date(),
        })

        setServiceOrder(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchServiceOrder()
    }, []);

    return (
        <ServiceOrderContext.Provider value={{
            serviceOrder,
            fetchServiceOrder, 
            createServiceOrder
        }}>
            {children}
        </ServiceOrderContext.Provider>
    );
}
