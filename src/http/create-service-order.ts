interface CreateServiceOrderRequest {
  idCliente: string
  aparelho: string
  marca: string
  modelo: string
  serie: string
  defeito: string
  acessorios: string
  localizacaoAparelho: string
  preOrcamento?: string | null
  valorMaoDeObra?: string | null
  valorPecas?: string | null
  valorTotal?: string | null
  motivos?: string | null
  notas?: string | null
  flagUrgencia?: boolean
}

export async function createServiceOrder({
  idCliente,
  aparelho,
  marca,
  modelo,
  serie,
  defeito,
  acessorios,
  localizacaoAparelho,
  preOrcamento,
  valorMaoDeObra,
  valorPecas,
  valorTotal,
  motivos,
  notas,
  flagUrgencia
}: CreateServiceOrderRequest) {
  await fetch('https://eletronica-barg-api.onrender.com/create-service-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idCliente,
      aparelho,
      marca,
      modelo,
      serie,
      defeito,
      acessorios,
      localizacaoAparelho,
      preOrcamento,
      valorMaoDeObra,
      valorPecas,
      valorTotal,
      motivos,
      notas,
      flagUrgencia
    }),
  })
}