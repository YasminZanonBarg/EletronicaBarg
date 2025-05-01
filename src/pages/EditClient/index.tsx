import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SectionWrapper } from "../../components/SectionWrapper"
import { TextField } from "../../components/TextField"
import { SaveButton } from "../../components/SaveButton"
import CanceledClientModal from "../../components/CanceledClientModal"

import { AddressSection, ContactSection, Container, Content, PersonalDataSection, SectionButtons } from "./styles"
import { useSearchParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ClientResponse, getClients } from "../../http/get-clients"
import { useEffect, useState } from "react"
import { updateClientRequest } from "../../http/update-client" 
import { updateAddressRequest } from "../../http/update-address"
import { updateCepRequest } from '../../http/update-cep'


export function EditClient() {
  // Coletar dados do cliente selecinado
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  
  const { data } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    staleTime: 1000 * 60,
  })
  
  const [client, setClient] = useState<ClientResponse[0] | null>(null)
  useEffect(() => {
    if (data && id) {
      const foundClient = data.find((item) => item.id === id)
      if (foundClient) {
        setClient(foundClient)
      }
    }
  }, [data, id])

  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")

  useEffect(() => {
    if (client?.cep) {
      setCep(client.cep)
    }
  }, [client])

  useEffect(() => {
    if (client?.cidade) {
      setCidade(client.cidade)
    }
  }, [client])

  const updateCepMutation = useMutation({
    mutationFn: updateCepRequest,
    onSuccess: (data) => setCidade(data.cidade),
    onError: (error) => console.error("Erro ao atualizar CEP", error),
  })  

  const handleCepKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const valorAtual = (e.currentTarget as HTMLInputElement).value;
      if (valorAtual.length === 8 && client) {
        updateCepMutation.mutate({
          idEndereco: client.idEndereco,  // Aqui passa o idEndereco do cliente
          codigoCep: valorAtual           // Aqui passa o código do CEP
        })
      }
    }
  }
  
  if (!client) return <p>Cliente não encontrada</p>

  // Chamando updateClientRequest e updateAddressRequest
  function handleSave() {
    if (!client) return
    
    // Atualização dos dados do cliente
    const updatedClientData = {
      id: client.id,
      nomeCompleto: (document.getElementById("nomeCompleto") as HTMLInputElement).value,
      tipoPessoa: (document.getElementById("tipoPessoa") as HTMLInputElement).value,
      sexo: (document.getElementById("sexo") as HTMLInputElement).value,
      dataNascimento: new Date((document.getElementById("dataNascimento") as HTMLInputElement).value),
      cpf: (document.getElementById("cpf") as HTMLInputElement).value,
      rg: (document.getElementById("rg") as HTMLInputElement).value,
      filiacao: (document.getElementById("filiacao") as HTMLInputElement).value,
      observacao: (document.getElementById("observacao") as HTMLInputElement).value,
      celular1: (document.getElementById("celular1") as HTMLInputElement).value,
      celular2: (document.getElementById("celular2") as HTMLInputElement).value,
      telefone1: (document.getElementById("telefone1") as HTMLInputElement).value,
      telefone2: (document.getElementById("telefone2") as HTMLInputElement).value,
    }
    
    // Atualização dos dados de endereço
    const updatedAddressData = {
      id: client.idEndereco,
      cep: (document.getElementById("cep") as HTMLInputElement).value,
      bairro: (document.getElementById("bairro") as HTMLInputElement).value,
      logradouro: (document.getElementById("logradouro") as HTMLInputElement).value,
      numeroEndereco: Number((document.getElementById("numeroEndereco") as HTMLInputElement).value),
      complemento: (document.getElementById("complemento") as HTMLInputElement).value,
    }
    
    // Atualizando os dados do cliente
    updateClientRequest(updatedClientData)
      .then(() => {
        // Atualizando o endereço
        updateAddressRequest(updatedAddressData)
          .then(() => {
            alert("Cliente e endereço atualizados com sucesso!")
            queryClient.invalidateQueries({ queryKey: ['clients'] })
          })
          .catch((err) => {
            console.error(err)
            alert("Erro ao atualizar o endereço.")
          })
      })
      .catch((err) => {
        console.error(err)
        alert("Erro ao atualizar o cliente.")
      })
  }  

  const today = new Date()
  const formattedDate = today.toISOString().split('T')[0]

  return (
    <Container>
      <NavigationRail />

      <Content>
        <Header />

        <main>
          <SectionWrapper title="DADOS PESSOAIS">
            <form>
              <PersonalDataSection>
                <div className="first_part">
                  <TextField 
                    id="dataCadastro" 
                    label="Data Cadastro" 
                    type="date" 
                    defaultValue={formattedDate}
                    editable={false}  
                  /> 
                  <TextField 
                    id="tipoPessoa" 
                    label="Tipo Pessoa" 
                    defaultValue={client.tipoPessoa}
                  /> 
                  <TextField 
                    id="sexo" 
                    label="Sexo" 
                    defaultValue={client.sexo}
                  />
                  <TextField 
                    id="dataNascimento" 
                    label="Data Nascimento" 
                    type="date"
                    defaultValue={new Date(client.dataNascimento).toISOString().split('T')[0]}
                  />
                </div>

                <div className="second_part">
                  <div className="name">
                    <TextField 
                      id="nomeCompleto" 
                      label="Nome Completo"
                      defaultValue={client.nomeCompleto}
                    />
                  </div>
                  <div className="cpf">
                    <TextField 
                      id="cpf" 
                      label="CPF" 
                      defaultValue={client.cpf}
                    />
                  </div>
                  <div className="rg">
                    <TextField 
                      id="rg" 
                      label="RG" 
                      defaultValue={client.rg}
                    />
                  </div>
                </div>

                <div className="third_part">
                  <div className="filiation">
                    <TextField 
                      id="filiacao" 
                      label="Filiação" 
                      multiline 
                      defaultValue={client.filiacao}
                    />
                  </div>

                  <div className="observation">
                    <TextField 
                      id="observacao" 
                      label="Observação" 
                      multiline 
                      defaultValue={client.observacao ?? ''}
                    />
                    <button className="clear-button">
                      <md-icon>error</md-icon>
                    </button>
                  </div>
                </div>


              </PersonalDataSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="ENDEREÇO">
            <form>
              <AddressSection>
                <div className="first_part">
                  <div className="cep">
                    <TextField 
                      id="cep" 
                      label="CEP" 
                      defaultValue={cep}
                      onChange={(value: string) => setCep(value)}
                      onKeyDown={handleCepKeyDown}
                    />
                  </div>
                  <div className="city">
                    <TextField 
                      id="cidade" 
                      label="Cidade" 
                      defaultValue={cidade}
                      editable={false} 
                    />
                  </div>
                  <div className="neighborhood">
                    <TextField 
                      id="bairro" 
                      label="Bairro" 
                      defaultValue={client.bairro}
                    />
                  </div>
                </div>

                <div className="second_part">
                  <div className="street">
                    <TextField 
                      id="logradouro" 
                      label="Logradouro" 
                      defaultValue={client.logradouro}
                    />
                  </div>
                  <div className="house_number">
                    <TextField 
                      id="numeroEndereco" 
                      label="Nº" 
                      type="number" 
                      defaultValue={String(client.numeroEndereco)}
                    />
                  </div>
                  <div className="complement">
                    <TextField 
                      id="complemento" 
                      label="Complemento" 
                      defaultValue={client.complemento ?? ''}
                    />
                  </div>
                </div>
              </AddressSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="CONTATO">
            <form>
              <ContactSection>
                <div className="first_part">
                  <TextField 
                    id="celular1" 
                    label="Celular (1)" 
                    type="tel"
                    defaultValue={client.celular1}
                  />
                  <TextField 
                    id="celular2" 
                    label="Celular (2)" 
                    type="tel"
                    defaultValue={client.celular2 ?? ''}
                  />
                  <TextField 
                    id="telefone1" 
                    label="Telefone (1)" 
                    type="tel"
                    defaultValue={client.telefone1 ?? ''}
                  />
                  <TextField 
                    id="telefone2" 
                    label="Telefone (2)" 
                    type="tel"
                    defaultValue={client.telefone2 ?? ''}
                  />
                </div>
              </ContactSection>
            </form>
          </SectionWrapper>

          <SectionButtons>
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
