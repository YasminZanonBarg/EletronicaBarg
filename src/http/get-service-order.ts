export type ServiceOrderResponse = {
  id: string
  idCliente: string
  nomeCliente: string,
  numeroOrdemServico: number
  dataEntrada: Date
  dataSaida?: Date | null
  situacao: string
  aparelho: string
  marca: string
  modelo: string
  serie: string
  defeito: string
  acessorios: string
  localizacaoAparelho: string
  preOrcamento?: string | null //Decimal do ORM retorna como string
  valorMaoDeObra?: string | null
  valorPecas?: string | null
  valorTotal?: string | null
  motivos?: string | null
  notas?: string | null
}[]

export async function getServiceOrder(): Promise<ServiceOrderResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/service-order')
  const data = await response.json()

  return data.result
}