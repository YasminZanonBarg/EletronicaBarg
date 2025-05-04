export type BigNumbersMetricsResponse = {
  qtd_consertos: number
  valor_consertos: number
  valor_medio_consertos: number
  aprovados: number
  taxa_aprovacao: number
}

export type ApiResponse = {
  metrics: BigNumbersMetricsResponse
}

export async function getBigNumbersMetrics(
  startDate: string,
  finalDate: string
): Promise<ApiResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/get-big-numbers-metrics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      start_date: startDate,
      final_date: finalDate,
    }),
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar métricas')
  }

  const data: ApiResponse = await response.json()

  return data
}
