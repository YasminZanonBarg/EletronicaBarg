interface CreateAddressRequest {
  cep: string
  bairro: string
  logradouro: string
  numeroEndereco: number
  complemento?: string | null
}

export async function createAddressRequest({
  cep,
  bairro,
  logradouro,
  numeroEndereco,
  complemento
}: CreateAddressRequest) {
  await fetch('http://localhost:3333/create-address', {
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
}
