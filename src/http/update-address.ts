interface UpdateAddressRequest {
  id: string
  cep?: string
  bairro?: string
  logradouro?: string
  numeroEndereco?: number
  complemento?: string | null
}

export async function updateAddressRequest({
  id,
  ...data
}: UpdateAddressRequest) {
  await fetch(`http://localhost:3333/update-address/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}