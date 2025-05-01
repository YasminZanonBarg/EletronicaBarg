// Se estiver tudo no mesmo arquivo
interface UpdateCepRequest {
  idEndereco: string
  codigoCep: string
}

interface UpdateCepResponse {
  cidade: string
}

export async function updateCepRequest({
  idEndereco,
  codigoCep,
}: UpdateCepRequest): Promise<UpdateCepResponse> {
  const response = await fetch('http://localhost:3333/update-cep', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idEndereco, codigoCep }),
  })

  if (!response.ok) {
    throw new Error('Erro ao atualizar CEP')
  }

  return await response.json()
}