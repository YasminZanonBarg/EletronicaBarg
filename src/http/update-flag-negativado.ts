interface UpdateFlagNegativadoRequest {
  id: string
}

export async function updateFlagNegativadoRequest({ id }: UpdateFlagNegativadoRequest) {
  const response = await fetch(`https://eletronica-barg-api.onrender.com/update-flag-negativado/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  if (!response.ok) {
    throw new Error('Falha ao atualizar a flag de negativado')
  }

  return response.json()
}