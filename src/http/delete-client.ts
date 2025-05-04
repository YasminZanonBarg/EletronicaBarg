export interface DeleteClientRequest {
  id: string
}

export async function deleteClient({ id }: DeleteClientRequest) {
  const result = await fetch('https://eletronica-barg-api.onrender.com/delete-client', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    }),
  })

  if (!result.ok) {
    const { message } = await result.json()
    throw new Error(message || 'Erro ao deletar ordem de serviço')
  }
}
