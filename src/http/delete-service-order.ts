export interface DeleteServiceOrderRequest {
  id: string
}

export async function deleteServiceOrder({ id }: DeleteServiceOrderRequest) {
  const result = await fetch('https://eletronica-barg-api.onrender.com/delete-service-order', {
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
