interface UpdateFlagUrgenciaRequest {
  id: string
}

export async function updateFlagUrgenciaRequest({ id }: UpdateFlagUrgenciaRequest) {
  const response = await fetch(`https://eletronica-barg-api.onrender.com/update-flag-urgencia/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  if (!response.ok) {
    throw new Error('Falha ao atualizar a flag de urgência')
  }

  return response.json()
}