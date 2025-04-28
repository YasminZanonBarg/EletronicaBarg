import "@material/web/icon/icon.js"
import '@material/web/textfield/outlined-text-field.js'

import IconWhatsApp from '../../assets/whatsapp_icon.png'
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"
import { SectionWrapper } from "../../components/SectionWrapper"
import { SaveButton } from "../../components/SaveButton"
import SearchClient from "../../components/SearchClientModal"
import CanceledClientModal from "../../components/CanceledClientModal"

import { AccompanimentSection, ClientSection, Container, Content, DefaultSection, EquipmentSection, InputWrapper, SectionButtons, StyledTextField, WhatsAppButton } from "./styles"

import { z } from "zod";
import { createServiceOrder } from "../../http/create-service-order";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { getServiceOrder } from "../../http/get-service-order";
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"


const createServiceOrderForm = z.object({
  idCliente: z.string(),
  dataSaida: z.coerce.date().nullable().optional(),
  aparelho: z.string(),
  marca: z.string(),
  modelo: z.string(),
  serie: z.string(),
  defeito: z.string(),
  acessorios: z.string(),
  localizacaoAparelho: z.string(),
  preOrcamento: z.string().nullable().optional(), // string vinda de decimal
  valorMaoDeObra: z.string().nullable().optional(),
  valorPecas: z.string().nullable().optional(),
  valorTotal: z.string().nullable().optional(),
  motivos: z.string().nullable().optional(),
  notas: z.string().nullable().optional(),
})

type CreateServiceOrderForm = z.infer<typeof createServiceOrderForm>

export function RegisterServiceOrder() {
  const [selectedClient, setSelectedClient] = useState<{ nomeCompleto: string; id: string } | null>(null)

  function handleSelectClient(client: { nomeCompleto: string; id: string }) {
    setSelectedClient(client)
  }

  const { control, handleSubmit, reset, setValue } = useForm<CreateServiceOrderForm>({
    resolver: zodResolver(createServiceOrderForm),
  });

  useEffect(() => {
    if (selectedClient) {
      setValue('idCliente', selectedClient.id)
    }
  }, [selectedClient, setValue]);

  async function handleCreateServiceOrder(data: CreateServiceOrderForm) {
    await createServiceOrder({
      idCliente: data.idCliente,
      dataSaida: data.dataSaida,
      aparelho: data.aparelho,
      marca: data.marca,
      modelo: data.modelo,
      serie: data.serie,
      defeito: data.defeito,
      acessorios: data.acessorios,
      localizacaoAparelho: data.localizacaoAparelho,
      preOrcamento: data.preOrcamento,
      valorMaoDeObra: data.valorMaoDeObra,
      valorPecas: data.valorPecas,
      valorTotal: data.valorTotal,  
      motivos: data.motivos,
      notas: data.notas,
    })

    reset()
  }

  const { data } = useQuery({
    queryKey: ["get-service-order"],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60,
  });

  if (!data) {
    return null;
  }

  const numeroOrdemServico = data[0].numeroOrdemServico + 1;

  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <form onSubmit={handleSubmit(handleCreateServiceOrder)}>
            <DefaultSection>
              <TextField
                id="service_order"
                label="Nº Ordem de Serviço"
                type="number"
                defaultValue={String(numeroOrdemServico)}
                editable={false}      
              />

              <TextField
                id="entry"
                label="Entrada" 
                type="date"
                defaultValue={formattedDate}
                editable={false}      
              />

              <TextField
                id="exit"
                label="Saída"
                defaultValue=""
                editable={false}      
              />

              <TextField
                id="status"
                label="Status"
                defaultValue="Aguardando orçamento"  
                editable={false}      
              />
            </DefaultSection>
          
            <SectionWrapper title="APARELHO">
              <EquipmentSection>
                <div className="first_part">
                  <Controller
                    control={control}
                    name="aparelho"
                    render={({ field }) => (
                      <TextField
                        id="equipment"
                        label="Aparelho"
                        value={String(field.value)}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="marca"
                    render={({ field }) => (
                      <TextField
                        id="brand"
                        label="Marca"
                        value={String(field.value)}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="modelo"
                    render={({ field }) => (
                      <TextField
                        id="model"
                        label="Modelo"
                        value={String(field.value)}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="serie"
                    render={({ field }) => (
                      <TextField
                        id="serie"
                        label="Série"
                        value={String(field.value)}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>

                <div className="second_part">
                  <Controller
                      control={control}
                      name="defeito"
                      render={({ field }) => (
                        <TextField
                          id="defect"
                          label="Defeito"
                          multiline
                          value={String(field.value)}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="acessorios"
                      render={({ field }) => (
                        <TextField
                          id="accessories"
                          label="Acessórios"
                          multiline
                          value={String(field.value)}
                          onChange={field.onChange}
                        />
                      )}
                    />
                </div>
              </EquipmentSection>
            </SectionWrapper>

            <SectionWrapper title="CLIENTE">
              <ClientSection>
                <InputWrapper>
                <StyledTextField
                  id="client_name"
                  value={selectedClient?.nomeCompleto || 'Nenhum cliente selecionado'}
                  readOnly
                />
                <SearchClient
                  cpfSelecionado={selectedClient?.id ?? ''}
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
              <AccompanimentSection>
                <div className="first_part">
                  <div className="location">
                    <Controller
                      control={control}
                      name="localizacaoAparelho"
                      render={({ field }) => (
                        <TextField
                          id="location"
                          label="Localização Aparelho"
                          value={String(field.value)}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                  <button>
                    <md-icon>stars</md-icon>
                  </button>
                  <div className="pre_budget">
                    <Controller
                      control={control}
                      name="preOrcamento"
                      render={({ field }) => (
                        <TextField
                          id="pre_budget"
                          label="Pré-Orçamento"
                          type="number"
                          value={String(field.value ?? '')}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="second_part">
                  <div className="first_half">
                    <div className="text-field-wrapper">
                      <Controller
                        control={control}
                        name="motivos"
                        render={({ field }) => (
                          <TextField
                            id="reasons"
                            label="Motivos"
                            multiline
                            value={String(field.value ?? '')}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <Controller
                        control={control}
                        name="notas"
                        render={({ field }) => (
                          <TextField
                            id="notes"
                            label="Notas"
                            multiline
                            value={String(field.value ?? '')}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="second_half">
                    <div className="text-field-wrapper">
                      <Controller
                        control={control}
                        name="valorMaoDeObra"
                        render={({ field }) => (
                          <TextField
                            id="workforce"
                            label="Mão de Obra"
                            type="number"
                            value={String(field.value ?? '')}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <Controller
                        control={control}
                        name="valorPecas"
                        render={({ field }) => (
                          <TextField
                            id="parts"
                            label="Peças"
                            type="number"
                            value={String(field.value ?? '')}
                            onChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                    <p>Total: R$ 0,00</p>
                  </div>
                </div>
              </AccompanimentSection>
            </SectionWrapper>
            
            <SectionButtons>
              <div className="left_buttons">
                <button className="simple_button">Imprimir</button>
              </div>
              <div className="right_buttons">
                <SaveButton type="submit" />
                <CanceledClientModal />
              </div>
            </SectionButtons>
          </form>
        </main>
      </Content>
    </Container>
  );
}