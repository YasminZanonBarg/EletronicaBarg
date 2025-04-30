import "@material/web/icon/icon.js"
import '@material/web/textfield/outlined-text-field.js'
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"
import { SectionWrapper } from "../../components/SectionWrapper"
import { SaveButton } from "../../components/SaveButton"
import SearchClient from "../../components/SearchClientModal"
import CanceledClientModal from "../../components/CanceledClientModal"
import { WhatsAppButton } from '../../components/WhatsappButton'
import { AccompanimentSection, ClientSection, Container, Content, DefaultSection, EquipmentSection, InputWrapper, SectionButtons, StyledTextField } from "./styles"
import { createServiceOrder } from "../../http/create-service-order"
import { getServiceOrder } from "../../http/get-service-order"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function RegisterServiceOrder() {
  // Use State - Alterações no número da ordem de serviço
  const [numeroOrdemServico, setNumeroOrdemServico] = useState("")
  const queryClient = useQueryClient();  

  const { data } = useQuery({
    queryKey: ["get-service-order"],
    queryFn: getServiceOrder,
    staleTime: 1000 * 60,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const novoNumero = data[0].numeroOrdemServico + 1
      setNumeroOrdemServico(novoNumero.toString())
    }
  }, [data])

  // Use State - Função vincular cliente
  const [selectedClient, setSelectedClient] = useState<{nomeCompleto: string; id: string; celular1: string;} | null>(null)

  // Função - Função vincular cliente
  function handleSelectClient(client: { nomeCompleto: string; id: string; celular1: string }) {
    setSelectedClient(client)
  }  

  const resetForm = () => {
    const ids = [
      'aparelho', 'marca', 'modelo', 'serie', 'defeito',
      'acessorios', 'localizacaoAparelho', 'preOrcamento', 
      'motivos', 'notas', 'valorMaoDeObra','valorPecas'
    ]
    ids.forEach(id => {
      const input = document.getElementById(id) as HTMLInputElement
      if (input) input.value = ''
    })
    setSelectedClient(null)
  }

  const handleSaveClick = async () => {
      try {
        // Coletar e validar dados do formulário
        const aparelho = (document.getElementById('aparelho') as HTMLInputElement)?.value
        const marca = (document.getElementById('marca') as HTMLInputElement)?.value
        const modelo = (document.getElementById('modelo') as HTMLInputElement)?.value
        const serie = (document.getElementById('serie') as HTMLInputElement)?.value
        const defeito = (document.getElementById('defeito') as HTMLInputElement)?.value
        const acessorios = (document.getElementById('acessorios') as HTMLInputElement)?.value
        const localizacaoAparelho = (document.getElementById('localizacaoAparelho') as HTMLInputElement)?.value
        const preOrcamento = (document.getElementById('preOrcamento') as HTMLInputElement)?.value
        const motivos = (document.getElementById('motivos') as HTMLInputElement)?.value
        const notas = (document.getElementById('notas') as HTMLInputElement)?.value
        const valorMaoDeObra = (document.getElementById('valorMaoDeObra') as HTMLInputElement)?.value
        const valorPecas = (document.getElementById('valorPecas') as HTMLInputElement)?.value
  
        if (!aparelho || !marca || !modelo || !serie || !defeito || !acessorios || !localizacaoAparelho) {
          alert('Preencha todos os campos obrigatórios da ordem de serviço!')
          return
        }

        if ( selectedClient?.id == null) {
          alert('Selecione um cliente para a ordem de serviço')
          return
        }
  
        // Criar ordem de serviço
        await createServiceOrder({
          idCliente: selectedClient?.id || '',
          aparelho,
          marca,
          modelo,
          serie,
          defeito,
          acessorios,
          localizacaoAparelho,
          preOrcamento: preOrcamento || null,
          motivos: motivos || null,
          notas: notas || null,
          valorMaoDeObra:  String(valorMaoDeObra) || null,
          valorPecas:  String(valorPecas) || null,
          valorTotal: String(
            (valorPecas ? Number(valorPecas) : 0) + (valorMaoDeObra ? Number(valorMaoDeObra) : 0)
          ),
        })
  
        alert('Ordem de serviço cadastrada com sucesso!')
        queryClient.invalidateQueries({ queryKey: ['get-service-order'] })
        resetForm()
      } catch (error) {
        console.error('Erro ao salvar ordem de serviço:', error)
        alert('Erro ao salvar ordem de serviço. Tente novamente.')
      }
  }

  // Função para impressão dos dados
  const handlePrint = () => {
    const printContents = document.getElementById("print-area")?.innerHTML;
    if (!printContents) return;
  
    const originalContents = document.body.innerHTML;
  
    document.body.innerHTML = `
      <div style="zoom: 50%;">
        ${printContents}
      </div>
      </br></br></br>
      <div style="zoom: 50%;">
        ${printContents}
      </div>
      `;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  if (!data) {
    return null
  }

  // Váriavel de data cadastro
  const today = new Date();
  const formattedDate = today.toLocaleDateString('fr-CA') 

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
                  <TextField
                    id="aparelho"
                    label="Aparelho"
                  />
                  <TextField
                    id="marca"
                    label="Marca"
                  />
                  <TextField
                    id="modelo"
                    label="Modelo"
                  />
                  <TextField
                    id="serie"
                    label="Série"
                  />
                </div>

                <div className="second_part">
                  <TextField
                    id="defeito"
                    label="Defeito"
                    multiline
                  />
                  <TextField
                    id="acessorios"
                    label="Acessórios"
                    multiline
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
                    />
                  </div>
                  <button>
                    <md-icon>stars</md-icon>
                  </button>
                  <div className="pre_budget">
                    <TextField
                      id="preOrcamento"
                      label="Pré-Orçamento"
                      type="number"
                    />
                  </div>
                </div>

                <div className="second_part">
                  <div className="first_half">
                    <div className="text-field-wrapper">
                      <TextField
                        id="motivos"
                        label="Motivos"
                        multiline
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <TextField
                        id="notas"
                        label="Notas"
                        multiline
                      />
                    </div>
                  </div>
                  <div className="second_half">
                    <div className="text-field-wrapper">
                      <TextField
                        id="valorMaoDeObra"
                        label="Mão de Obra"
                        type="number"
                      />
                    </div>
                    <div className="text-field-wrapper">
                      <TextField
                        id="valorPecas"
                        label="Peças"
                        type="number"
                      />
                    </div>
                    <p>Total: R$ 0,00</p>
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
              <SaveButton onClick={handleSaveClick} />
              <CanceledClientModal />
            </div>
          </SectionButtons>
        </main>
      </Content>
    </Container>
  );
}