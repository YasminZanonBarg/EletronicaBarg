import { useState, useEffect } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getServiceOrder, ServiceOrderResponse } from "../../http/get-service-order"
import { getClients, ClientResponse } from "../../http/get-clients"
import { useSearchParams } from "react-router-dom"
import { WhatsAppButton } from '../../components/WhatsappButton'
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"
import { SectionWrapper } from "../../components/SectionWrapper"
import { SaveButton } from "../../components/SaveButton"
import SearchClient from "../../components/SearchClientModal"
import CanceledClientModal from "../../components/CanceledClientModal"
import { updateServiceOrderRequest } from "../../http/update-service-order"
import { 
  AccompanimentSection, 
  ClientSection, 
  Container, 
  Content, 
  DefaultSection, 
  EquipmentSection, 
  InputWrapper, 
  SectionButtons, 
  StyledTextField
} from "./styles"

export function EditServiceOrder() {
  // Coletando informações da ordem de serviço
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")

  const { data: serviceOrderData } = useQuery({
    queryKey: ["get-service-order"],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60,
  })

  const [serviceOrder, setServiceOrder] = useState<ServiceOrderResponse[0] | null>(null);

  useEffect(() => {
    if (serviceOrderData && id) {
      const foundOrder = serviceOrderData.find((item) => item.id === id);
      if (foundOrder) {
        setServiceOrder(foundOrder);
      }
    }
  }, [serviceOrderData, id])

  // Coletando informações do cliente
  const { data: clientData } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    staleTime: 1000 * 60,
  })

  const [client, setClient] = useState<ClientResponse[0] | null>(null)

  useEffect(() => {
    if (clientData && serviceOrder) {
      const foundClient = clientData.find((item) => item.id === serviceOrder.idCliente);
      if (foundClient) {
        setClient(foundClient);
      }
    }
  }, [clientData, serviceOrder])

  // Atualizar o estado de selectedClient quando o cliente for encontrado
  useEffect(() => {
    if (serviceOrder && client) {
      setSelectedClient({
        nomeCompleto: serviceOrder.nomeCliente ?? "",
        id: serviceOrder.idCliente ?? "",
        celular1: client?.celular1 ?? "",
        cpf: client?.cpf ?? "",
      });
    }
  }, [serviceOrder, client])

  // State para vincular o cliente selecionado
  const [selectedClient, setSelectedClient] = useState<{nomeCompleto: string; id: string; celular1: string; cpf: string}>({
    nomeCompleto: "",
    id: "",
    celular1: "",
    cpf: ""
  })

  // Função para selecionar cliente
  function handleSelectClient(client: { nomeCompleto: string; id: string; celular1: string; cpf: string }) {
    setSelectedClient(client)
  } 

  // Função para impressão dos dados
  const handlePrint = () => {
    const printContents = document.getElementById("print-area")?.innerHTML
    if (!printContents) return
  
    const originalContents = document.body.innerHTML
  
    document.body.innerHTML = `
      <div style="zoom: 50%;">
        ${printContents}
      </div>
      </br></br></br>
      <div style="zoom: 50%;">
        ${printContents}
      </div>
      `
    window.print()
    document.body.innerHTML = originalContents
    window.location.reload()
  }

  async function handleSave() {
    if (!serviceOrder) return

    // Atualização dos dados do cliente
    const updatedServiceOrderData = {
      id: serviceOrder.id,
      idCliente: selectedClient.id,
      situacao: (document.getElementById("situacao") as HTMLInputElement)?.value,
      aparelho: (document.getElementById("aparelho") as HTMLInputElement)?.value,
      marca: (document.getElementById("marca") as HTMLInputElement)?.value,
      modelo: (document.getElementById("modelo") as HTMLInputElement)?.value,
      defeito: (document.getElementById("defeito") as HTMLInputElement)?.value,
      acessorios: (document.getElementById("acessorios") as HTMLInputElement)?.value,
      localizacaoAparelho: (document.getElementById("localizacaoAparelho") as HTMLInputElement)?.value,
      motivos: (document.getElementById("motivos") as HTMLInputElement)?.value || null,
      notas: (document.getElementById("notas") as HTMLInputElement)?.value || null,
      preOrcamento: (document.getElementById("preOrcamento") as HTMLInputElement)?.value,
      valorMaoDeObra: (document.getElementById("valorMaoDeObra") as HTMLInputElement)?.value,
      valorPecas: (document.getElementById("valorPecas") as HTMLInputElement)?.value 
    }

    try {
      await updateServiceOrderRequest(updatedServiceOrderData)
      queryClient.invalidateQueries({ queryKey: ["get-service-order"] })
      alert("Ordem de serviço atualizada com sucesso!")
    } catch (error) {
      console.error("Erro ao atualizar ordem de serviço:", error)
      alert("Erro ao salvar. Tente novamente.")
    }
  }

  if (!serviceOrder) return <p>Ordem de serviço não encontrada</p>

  return (
    <Container>
      <NavigationRail />
      <Content>
        <Header />

        <main>
          <form id="print-area">
            <DefaultSection>
              <TextField
                id="numeroOrdemServico"
                label="Nº Ordem de Serviço"
                type="number"
                defaultValue={String(serviceOrder.numeroOrdemServico)}
                editable={false}
              />

              <TextField
                id="dataEntrada"
                label="Entrada"
                type="date"
                defaultValue={new Date(serviceOrder.dataEntrada).toISOString().split('T')[0]}
                editable={false}
              />

              <TextField
                id="dataSaida"
                label="Saída"
                defaultValue={serviceOrder.dataSaida ? new Date(serviceOrder.dataSaida).toLocaleDateString() : ''}
                editable={false}
              />

              <TextField
                id="situacao"
                label="Situação"
                select={true}
                value={serviceOrder.situacao || ''}
                onChange={(value) => setServiceOrder({ ...serviceOrder, situacao: value })}
                options={[
                  'Aguardando orçamento',
                  'Pendente aprovação',
                  'Conserto negado',
                  'Pendente conserto',
                  'Consertado',
                  'Consertado e retirado',
                  'Sem conserto e retirado',
                ]}
              />
            </DefaultSection>

            <SectionWrapper title="APARELHO">
              <form>
                <EquipmentSection>
                  <div className="first_part">
                    <TextField 
                      id="aparelho" 
                      label="Aparelho" 
                      defaultValue={serviceOrder.aparelho}
                    />
                    <TextField 
                      id="marca" 
                      label="Marca" 
                      defaultValue={serviceOrder.marca}
                    />
                    <TextField 
                      id="modelo" 
                      label="Modelo" 
                      defaultValue={serviceOrder.modelo}
                    />
                    <TextField 
                      id="serie" 
                      label="Série" 
                      defaultValue={serviceOrder.serie}
                    />
                  </div>

                  <div className="second_part">
                    <TextField 
                      id="defeito" 
                      label="Defeito" 
                      defaultValue={serviceOrder.defeito}
                      multiline 
                    />
                    <TextField 
                      id="acessorios" 
                      label="Acessórios" 
                      defaultValue={serviceOrder.acessorios}
                      multiline 
                    />
                  </div>
                </EquipmentSection>
              </form>
            </SectionWrapper>

            <SectionWrapper title="CLIENTE">
              <ClientSection>
                <InputWrapper>
                  <StyledTextField id="nomeCompleto" defaultValue={selectedClient.nomeCompleto} />
                  <SearchClient 
                    cpfSelecionado={selectedClient.cpf}
                    onSelectClient={handleSelectClient}
                  />
                </InputWrapper>

                <WhatsAppButton type="button" phoneNumber={selectedClient?.celular1}/>
              </ClientSection>
            </SectionWrapper>

              <SectionWrapper title="ACOMPANHAMENTO TÉCNICO">
                <AccompanimentSection>
                  <div className="first_part">
                    <div className="location">
                      <TextField 
                        id="localizacaoAparelho" 
                        label="Localização Aparelho"
                        defaultValue={serviceOrder.localizacaoAparelho}
                      />
                    </div>
                    <button>
                      <md-icon>stars</md-icon>
                    </button>
                    <div className="preOrcamento">
                      <TextField 
                        id="preOrcamento" 
                        type="number" 
                        label="Pré-Orçamento"
                        defaultValue={String(serviceOrder.preOrcamento)}
                      />
                    </div>
                  </div>

                  <div className="second_part">
                    <div className="first_half">
                      <div className="text-field-wrapper">
                        <TextField 
                          id="motivos" 
                          label="Motivos" 
                          defaultValue={serviceOrder.motivos ?? ''}
                          multiline 
                        />
                      </div>
                      <div className="text-field-wrapper">
                        <TextField 
                          id="notas" 
                          label="Notas" 
                          defaultValue={serviceOrder.notas ?? ''}
                          multiline 
                        />
                      </div>
                    </div>
                    <div className="second_half">
                      <div className="text-field-wrapper">
                        <TextField 
                          id="valorMaoDeObra" 
                          type="number" 
                          label="Mão de Obra"
                          defaultValue={String(serviceOrder.valorMaoDeObra)}
                        />
                      </div>
                      <div className="text-field-wrapper">
                        <TextField 
                          id="valorPecas" 
                          type="number" 
                          label="Peças"
                          defaultValue={String(serviceOrder.valorPecas)}
                        />
                      </div>
                      <p>Total: R$ { (Number(serviceOrder.valorPecas) + Number(serviceOrder.valorMaoDeObra) || 0).toFixed(2) }</p>
                    </div>
                  </div>
                </AccompanimentSection>
            </SectionWrapper>
          </form>

          <SectionButtons>
            <div className="left_buttons">
              <button 
                type="button"
                className="simple_button"
                onClick={handlePrint}
              >
                Imprimir
              </button>
            </div>
            <div className="right_buttons">
              <SaveButton onClick={handleSave} />
              <CanceledClientModal />
            </div>
          </SectionButtons>
        </main>
      </Content>
    </Container>
  );
}