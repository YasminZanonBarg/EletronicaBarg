import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { getServiceOrder, ServiceOrderResponse } from "../../http/get-service-order"
import { getClients, ClientResponse } from "../../http/get-clients"
import { useSearchParams } from "react-router-dom"

import IconWhatsApp from '../../assets/whatsapp_icon.png'
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"
import { SectionWrapper } from "../../components/SectionWrapper"
import { SaveButton } from "../../components/SaveButton"
import SearchClient from "../../components/SearchClientModal"
import CanceledClientModal from "../../components/CanceledClientModal"

import { 
  AccompanimentSection, 
  ClientSection, 
  Container, 
  Content, 
  DefaultSection, 
  EquipmentSection, 
  InputWrapper, 
  SectionButtons, 
  StyledTextField, 
  WhatsAppButton 
} from "./styles"

export function EditServiceOrder() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  // Coletando informações da ordem de serviço
  const { data: serviceOrderData } = useQuery({
    queryKey: ["get-service-order"],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60,
  });

  const [serviceOrder, setServiceOrder] = useState<ServiceOrderResponse[0] | null>(null);

  useEffect(() => {
    if (serviceOrderData && id) {
      const foundOrder = serviceOrderData.find((item) => item.id === id);
      if (foundOrder) {
        setServiceOrder(foundOrder);
      }
    }
  }, [serviceOrderData, id]);

  // Coletando informações do cliente
  const { data: clientData } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    staleTime: 1000 * 60,
  });

  const [client, setClient] = useState<ClientResponse[0] | null>(null);

  useEffect(() => {
    if (clientData && serviceOrder) {
      const foundClient = clientData.find((item) => item.id === serviceOrder.idCliente);
      if (foundClient) {
        setClient(foundClient);
      }
    }
  }, [clientData, serviceOrder]);

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
  }, [serviceOrder, client]);

  // State para vincular o cliente selecionado
  const [selectedClient, setSelectedClient] = useState<{nomeCompleto: string; id: string; celular1: string, cpf: string}>({
    nomeCompleto: "",
    id: "",
    celular1: "",
    cpf: ""
  });

  // Função para selecionar cliente
  function handleSelectClient(client: { nomeCompleto: string; id: string; celular1: string, cpf: string }) {
    setSelectedClient(client);
  } 

  if (!serviceOrder) return <p>Ordem de serviço não encontrada</p>;

  return (
    <Container>
      <NavigationRail />
      <Content>
        <Header />

        <main>
          <form>
            <DefaultSection>
              <TextField
                id="service_order"
                label="Nº Ordem de Serviço"
                type="number"
                defaultValue={String(serviceOrder.numeroOrdemServico)}
                editable={false}
              />

              <TextField
                id="entry"
                label="Entrada"
                type="date"
                defaultValue={new Date(serviceOrder.dataEntrada).toISOString().split('T')[0]}
                editable={false}
              />

              <TextField
                id="exit"
                label="Saída"
                defaultValue={serviceOrder.dataSaida ? new Date(serviceOrder.dataSaida).toLocaleDateString() : ''}
                editable={true}
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
          </form>

          <SectionWrapper title="APARELHO">
            <form>
              <EquipmentSection>
                <div className="first_part">
                  <TextField 
                    id="equipment" 
                    label="Aparelho" 
                    defaultValue={serviceOrder.aparelho}
                  />
                  <TextField 
                    id="brand" 
                    label="Marca" 
                    defaultValue={serviceOrder.marca}
                  />
                  <TextField 
                    id="model" 
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
                    id="defect" 
                    label="Defeito" 
                    defaultValue={serviceOrder.defeito}
                    multiline 
                  />
                  <TextField 
                    id="accessories" 
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
                <StyledTextField id="equipment" defaultValue={serviceOrder.nomeCliente} />
                <SearchClient 
                  cpfSelecionado={selectedClient.cpf}
                  onSelectClient={handleSelectClient}
                />
              </InputWrapper>

              <WhatsAppButton>
                WhatsApp
                <img src={IconWhatsApp} alt="Ícone Eletrônica Barg"/>
              </WhatsAppButton>
            </ClientSection>
          </SectionWrapper>

          <SectionWrapper title="ACOMPANHAMENTO TÉCNICO">
            <form>
              <AccompanimentSection>
                <div className="first_part">
                  <div className="location">
                    <TextField 
                      id="location" 
                      label="Localização Aparelho"
                      defaultValue={serviceOrder.localizacaoAparelho}
                    />
                  </div>
                  <button>
                    <md-icon>stars</md-icon>
                  </button>
                  <div className="pre_budget">
                    <TextField 
                      id="pre_budget" 
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
                        id="reasons" 
                        label="Motivos" 
                        defaultValue={serviceOrder.motivos ?? ''}
                        multiline 
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <TextField 
                        id="notes" 
                        label="Notas" 
                        defaultValue={serviceOrder.notas ?? ''}
                        multiline 
                      />
                    </div>
                  </div>
                  <div className="second_half">
                    <div className="text-field-wrapper">
                      <TextField 
                        id="workforce" 
                        type="number" 
                        label="Mão de Obra"
                        defaultValue={String(serviceOrder.valorMaoDeObra)}
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <TextField 
                        id="parts" 
                        type="number" 
                        label="Peças"
                        defaultValue={String(serviceOrder.valorPecas)}
                      />
                    </div>
                    <p>Total: R$ { (Number(serviceOrder.valorPecas) + Number(serviceOrder.valorMaoDeObra) || 0).toFixed(2) }</p>
                  </div>
                </div>
              </AccompanimentSection>
            </form>
          </SectionWrapper>

          <SectionButtons>
            <div className="left_buttons">
              <button className="simple_button">Imprimir</button>
            </div>
            <div className="right_buttons">
              <SaveButton />
              <CanceledClientModal />
            </div>
          </SectionButtons>
        </main>
      </Content>
    </Container>
  );
}