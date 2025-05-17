export type ClientResponse = {
  id: string
  idEndereco: string
  dataCadastro: Date
  tipoPessoa: string
  sexo: string
  dataNascimento: Date
  nomeCompleto: string
  cpf: string
  rg: string
  filiacao: string
  observacao?: string | null
  cep: string
  cidade: string
  bairro: string
  logradouro: string
  numeroEndereco: number
  complemento?: string | null
  celular1: string
  celular2?: string | null
  telefone1?: string | null
  telefone2?: string | null
  flagNegativado?: boolean
}[]

export async function getClients(): Promise<ClientResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/clients')
  const data = await response.json()

  return data.result
}