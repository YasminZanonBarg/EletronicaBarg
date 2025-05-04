export type ClientResponse = {
  id: string
  dataCadastro: string
  tipoPessoa: string
  sexo: string
  dataNascimento: string
  nomeCompleto: string
  cpf: string
  rg: string
  filiacao: string
  observacao: string | null
  celular1: string
  celular2: string | null
  telefone1: string | null
  telefone2: string | null
  cep: string
  cidade: string
  bairro: string
  logradouro: string
  numeroEndereco: number
  complemento: string
}

export async function getClientByCpf(cpf: string): Promise<ClientResponse> {
  const response = await fetch(`https://eletronica-barg-api.onrender.com/get-client-by-cpf?cpf=${cpf}`)

  if (!response.ok) {
    throw new Error('Erro ao buscar cliente')
  }

  const data = await response.json()

  return data.client
}