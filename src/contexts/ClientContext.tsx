import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Client {
    id: number;
    name: number;
    registerAt: string;
    cpf: string;
    cellphone_number: string;
    telephone_number: string;
}

interface CreateClientInput {
    name: number;
    cpf: string;
    cellphone_number: string;
    telephone_number: string;
}

interface ClientContextType {
    client: Client[];
    fetchClient: (query?: string) => Promise<void>;
    createClient: (data: CreateClientInput) => Promise<void>
}

interface ClientProviderProps {
    children: ReactNode
}

export const ClientContext = createContext({} as ClientContextType);

export function ClientProvider({ children }: ClientProviderProps) {
    const [client, setClient] = useState<Client[]>([]);

    async function fetchClient(query?: string) {
        const response = await api.get('/Client', {
            params: {
                _sort: 'registerAt',
                _order: 'desc',
                q: query,
            }
        })

        setClient(response.data)
    }

    async function createClient(data: CreateClientInput) {
        const { name, cpf, cellphone_number, telephone_number } = data;

        const response = await api.post('Client', {
            name,
            cpf,
            cellphone_number,
            telephone_number,
            registerAt: new Date(),
        })

        setClient(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchClient()
    }, []);

    return (
        <ClientContext.Provider value={{
            client,
            fetchClient, 
            createClient
        }}>
            {children}
        </ClientContext.Provider>
    );
}
