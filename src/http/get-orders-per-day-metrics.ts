export type DataEntrada = {
  dataEntrada: string
  quantidade: number
}

export type getOrdersPerDayMetricsResponse = {
  dataEntrada: DataEntrada[]
}

export async function getOrdersPerDayMetrics(
  startDate: string,
  finalDate: string
): Promise<getOrdersPerDayMetricsResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/get-orders-per-day-metrics', {
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
    throw new Error('Erro ao buscar ordem de serviço por dia')
  }

  const data: getOrdersPerDayMetricsResponse = await response.json()

  return data
}
