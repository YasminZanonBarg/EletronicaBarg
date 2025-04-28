interface CreateServiceOrderRequest {
  idCliente: string
  dataSaida?: Date | null
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
}

export async function createServiceOrder({
  idCliente,
  dataSaida,
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
}: CreateServiceOrderRequest) {
  await fetch('http://localhost:3333/create-service-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idCliente,
      dataSaida, // Lembre de serializar a data corretamente se necessário!
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
    }),
  })
}