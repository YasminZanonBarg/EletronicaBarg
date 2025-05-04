export type Defeito = {
  defeito: string
  quantidade: number
}

export type PeriodDefectsMetricsResponse = {
  defeitos: Defeito[]
}

export async function getPeriodDefectsMetrics(
  startDate: string,
  finalDate: string
): Promise<PeriodDefectsMetricsResponse> {
  const response = await fetch('https://eletronica-barg-api.onrender.com/get-period-defects-metrics', {
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
    throw new Error('Erro ao buscar defeitos por período')
  }

  const data: PeriodDefectsMetricsResponse = await response.json()

  return data
}
