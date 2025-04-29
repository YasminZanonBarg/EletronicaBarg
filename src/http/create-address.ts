interface CreateAddressRequest {
  cep: string
  bairro: string
  logradouro: string
  numeroEndereco: number
  complemento?: string | null
}

interface CreateAddressResponse {
  idEndereco: string
}

export async function createAddressRequest({
  cep,
  bairro,
  logradouro,
  numeroEndereco,
  complemento
}: CreateAddressRequest): Promise<CreateAddressResponse> {
  const response = await fetch('http://localhost:3333/create-address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cep,
      bairro,
      logradouro,
      numeroEndereco,
      complemento,
    }),
  })

  if (!response.ok) {
    throw new Error('Erro ao criar endereço')
  }

  const data = await response.json()
  return data
}
