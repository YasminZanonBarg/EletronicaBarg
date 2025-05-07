import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SaveButton } from "../../components/SaveButton"
import { TextField } from "../../components/TextField"
import { ReportChart } from "../../components/ReportChart"

import { Container, Content, HeaderContainer, ReportBigContainers, ReportSmallContainers } from "./styles"

import { useMutation } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { getBigNumbersMetrics } from "../../http/get-big-numbers-metrics"
import { getPeriodDefectsMetrics } from "../../http/get-period-defects-metrics"
import { DefectChart } from "../../components/DefectChart/index"
import { getOrdersPerDayMetrics } from "../../http/get-orders-per-day-metrics"
import { OrdersPerDayChart } from "../../components/OrdersPerDayChart/index"

function formatDateToUTC(dateStr: string): string {
  // Cria um objeto Date fixando a hora em 00:00 UTC
  const [year, month, day] = dateStr.split("-").map(Number)
  const date = new Date(Date.UTC(year, month - 1, day)) // mês começa em 0
  return date.toISOString().split("T")[0] // retorna apenas a parte YYYY-MM-DD
}

export function Report() {
  const deRef = useRef<HTMLInputElement>(null)
  const paraRef = useRef<HTMLInputElement>(null)

  const [metrics, setMetrics] = useState({
    qtd_consertos: 0,
    valor_consertos: 0,
    valor_medio_consertos: 0,
    aprovados: 0,
    taxa_aprovacao: 0,
  })

  const [defectData, setDefectData] = useState<{ defeito: string; quantidade: number }[]>([])
  const [ordersPerDayData, setordersPerDay] = useState<{ dataEntrada: string; quantidade: number }[]>([])

  const bigMetricsMutation = useMutation({
    mutationFn: async () => {
      const startDateRaw = deRef.current?.value || ""
      const finalDateRaw = paraRef.current?.value || ""
      const startDate = formatDateToUTC(startDateRaw)
      const finalDate = formatDateToUTC(finalDateRaw)

      const res = await getBigNumbersMetrics(startDate, finalDate)
      return res.metrics
    },
    onSuccess: (data) => {
      setMetrics(data)
    },
    onError: () => {
      alert("Erro ao buscar métricas.")
    }
  })

  const defectsMutation = useMutation({
    mutationFn: async () => {
      const startDateRaw = deRef.current?.value || ""
      const finalDateRaw = paraRef.current?.value || ""
      const startDate = formatDateToUTC(startDateRaw)
      const finalDate = formatDateToUTC(finalDateRaw)

      const res = await getPeriodDefectsMetrics(startDate, finalDate)
      return res.defeitos
    },
    onSuccess: (data) => {
      const defectchartData = data.map(defeito => ({
        defeito: defeito.defeito,
        quantidade: defeito.quantidade
      }))
      setDefectData(defectchartData)
    },
    onError: () => {
      alert("Erro ao buscar defeitos.")
    }
  })

  const ordersPerDayMutation = useMutation({
    mutationFn: async () => {
      const startDateRaw = deRef.current?.value || ""
      const finalDateRaw = paraRef.current?.value || ""
      const startDate = formatDateToUTC(startDateRaw)
      const finalDate = formatDateToUTC(finalDateRaw)

      const res = await getOrdersPerDayMetrics(startDate, finalDate)
      return res.dataEntrada
    },
    onSuccess: (data) => {
      const orderPerDayChartData = data.map(dataEntrada => ({
        dataEntrada: dataEntrada.dataEntrada,
        quantidade: dataEntrada.quantidade
      }))
      setordersPerDay(orderPerDayChartData)
    },
    onError: () => {
      alert("Erro ao buscar ordens por dia.")
    }
  })

  function handleSave() {
    bigMetricsMutation.mutate()
    defectsMutation.mutate()
    ordersPerDayMutation.mutate()
  }

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <HeaderContainer>          
            <div>
              <h1>Relatórios</h1>
            </div>
            
            <span>
              <div>
                <TextField id="de" label="Data Inicial" type="date" inputRef={deRef} />
              </div>
              <div>
                <TextField id="para" label="Data Final" type="date" inputRef={paraRef} />
              </div>
              <div className="save_button">
                <SaveButton onClick={handleSave} />
              </div>
            </span>
          </HeaderContainer>

          <ReportSmallContainers>
            <ReportChart title="Total de Consertos">
              <p>{metrics.qtd_consertos}</p>
            </ReportChart>

            <ReportChart title="Consertos Aprovados">
              <p>{metrics.aprovados} / {metrics.taxa_aprovacao}%</p>
            </ReportChart>

            <ReportChart title="Valor Total">
              <p>R$ {Number(metrics.valor_consertos).toFixed(2)}</p>
            </ReportChart>

            <ReportChart title="Valor Médio por Conserto">
              <p>R$ {Number(metrics.valor_medio_consertos).toFixed(2)}</p>
            </ReportChart>
          </ReportSmallContainers>

          <ReportBigContainers>
            <ReportChart title="Consertos x Problemas">
              {defectData.length > 0 ? <DefectChart data={defectData} /> : <p>Nenhum dado</p>}
            </ReportChart>

            <ReportChart title="Ordem de Serviço Abertas por Dia">
              {ordersPerDayData.length > 0 ? <OrdersPerDayChart data={ordersPerDayData} /> : <p>Nenhum dado</p>}
            </ReportChart>
          </ReportBigContainers>
        </main>
      </Content>
    </Container>
  )
}
