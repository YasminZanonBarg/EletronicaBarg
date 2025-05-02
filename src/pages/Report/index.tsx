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

  const mutation = useMutation({
    mutationFn: async () => {
      const startDate = deRef.current?.value || ""
      const finalDate = paraRef.current?.value || ""

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

  function handleSave() {
    mutation.mutate()
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
            </ReportChart>

            <ReportChart title="Ordem de Serviço Abertas por Dia">
            </ReportChart>
          </ReportBigContainers>
        </main>
      </Content>
    </Container>
  )
}
