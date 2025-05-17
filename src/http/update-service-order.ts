interface UpdateServiceOrderRequest {
  id: string
  idCliente?: string
  situacao?: string
  aparelho?: string
  marca?: string
  modelo?: string
  serie?: string
  defeito?: string
  acessorios?: string
  localizacaoAparelho?: string
  preOrcamento?: string | null
  valorMaoDeObra?: string | null
  valorPecas?: string | null
  valorTotal?: string | null
  motivos?: string | null
  notas?: string | null
  dataSaida?: Date | null
  flagUrgencia?: boolean
}

export async function updateServiceOrderRequest({
  id,
  ...data
}: UpdateServiceOrderRequest) {
  const response = await fetch(`https://eletronica-barg-api.onrender.com/update-service-order/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Falha ao atualizar a ordem de serviço')
  }

  return response.json()
}
