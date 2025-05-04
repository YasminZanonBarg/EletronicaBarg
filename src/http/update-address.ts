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
  await fetch(`https://eletronica-barg-api.onrender.com/update-address/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}