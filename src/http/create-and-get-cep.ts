export type CepResponse = {
  cidade: string
}

export async function createAndGetCep(codigoCep: string): Promise<CepResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/create-and-get-cep', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ codigoCep }),
  })

  if (!response.ok) {
    throw new Error('Erro ao buscar ou criar CEP')
  }

  return response.json()
}