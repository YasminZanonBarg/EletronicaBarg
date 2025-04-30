import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog"

import { TextField } from "../TextField"
import { SectionWrapper } from "../SectionWrapper"
import { SearchButton } from "../../components/SearchButton"
import { SaveButton } from "../../components/SaveButton"

import { EditIcon, ModalContent, ModalCloseIcon, ModalOverlay, SaveButtonWrapper, SearchContainer } from "./styles"
import { AddressSection, ContactSection, PersonalDataSection } from "../../pages/RegisterClient/styles"

import { useQuery } from "@tanstack/react-query"
import { getClientByCpf, ClientResponse } from "../../http/get-client-by-cpf"
import { useState } from "react";

interface SearchClientProps {
  cpfSelecionado: string
  onSelectClient: (client: { nomeCompleto: string; id: string, celular1: string }) => void
}

export default function SearchClient({ cpfSelecionado, onSelectClient }: SearchClientProps) {
  // const queryClient = useQueryClient()
  const [cpf, setCpf] = useState('')

  const { data, isLoading, error } = useQuery<ClientResponse>( {
    queryKey: ['get-client-by-cpf', cpf],
    queryFn: ({ queryKey }) => {
      const cpfParam = queryKey[1] as string
      return getClientByCpf(cpfParam)
    },
    enabled: !!cpf, 
    staleTime: 1000 * 60,
  });

  function handleSearchClient(cpfInput: string) {
    setCpf(cpfInput)
  }

  function handleSave() {
    if (data) {
      onSelectClient({
        nomeCompleto: data.nomeCompleto,
        id: data.id,
        celular1: data.celular1
      });
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <EditIcon>
          <md-icon>edit</md-icon>
        </EditIcon>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <SearchContainer>
            <SearchButton
              placeholder={cpfSelecionado ? cpfSelecionado : "Pesquisar cliente por CPF"}
              onSearch={handleSearchClient}
              size="small"
              defaultValue={cpf} 
            />
          </SearchContainer>

          {isLoading && <p>Carregando...</p>}
          {error && <p>Erro ao buscar o cliente: {error.message}</p>}

          <form key={cpf}>
            <SectionWrapper title="DADOS PESSOAIS">
              <PersonalDataSection>
                <div className="first_part">
                  <TextField
                    id="register_date"
                    label="Data Cadastro"
                    type="date"
                    defaultValue={data?.dataCadastro ? new Date(data.dataCadastro).toISOString().split("T")[0] : ""}
                  />
                  <TextField
                    id="person_type"
                    label="Tipo Pessoa"
                    defaultValue={data?.tipoPessoa || ""}
                  />
                  <TextField
                    id="genere"
                    label="Sexo"
                    defaultValue={data?.sexo || ""}
                  />
                  <TextField
                    id="born_date"
                    label="Data Nascimento"
                    type="date"
                    defaultValue={data?.dataNascimento || ""}
                  />
                </div>

                <div className="second_part">
                  <div className="name">
                    <TextField
                      id="name"
                      label="Nome Completo"
                      defaultValue={data?.nomeCompleto || ""}
                    />
                  </div>
                  <div className="cpf">
                    <TextField
                      id="cpf"
                      label="CPF"
                      type="text"
                      defaultValue={data?.cpf || ""}
                    />
                  </div>
                  <div className="rg">
                    <TextField
                      id="rf"
                      label="RG"
                      type="text"
                      defaultValue={data?.rg || ""}
                    />
                  </div>
                </div>

                <div className="third_part">
                  <div className="filiation">
                    <TextField
                      id="filiation"
                      label="Filiação"
                      multiline
                      defaultValue={data?.filiacao || ""}
                    />
                  </div>
                  <div className="observation">
                    <TextField
                      id="observation"
                      label="Observação"
                      multiline
                      defaultValue={data?.observacao || ""}
                    />
                    <button className="clear-button">
                      <md-icon>error</md-icon>
                    </button>
                  </div>
                </div>
              </PersonalDataSection>
            </SectionWrapper>

            <SectionWrapper title="ENDEREÇO">
              <AddressSection>
                <div className="first_part">
                  <TextField
                    id="cep"
                    label="CEP"
                    type="number"
                    defaultValue={data?.cep || ""}
                  />
                  <TextField
                    id="city"
                    label="Cidade"
                    defaultValue={data?.cidade || ""}
                  />
                  <TextField
                    id="neighborhood"
                    label="Bairro"
                    defaultValue={data?.bairro || ""}
                  />
                </div>

                <div className="second_part">
                  <TextField
                    id="street"
                    label="Logradouro"
                    defaultValue={data?.logradouro || ""}
                  />
                  <TextField
                    id="house_number"
                    label="Nº"
                    type="number"
                    defaultValue={String(data?.numeroEndereco ?? "")}
                  />
                  <TextField
                    id="complement"
                    label="Complemento"
                    defaultValue={data?.complemento || ""}
                  />
                </div>
              </AddressSection>
            </SectionWrapper>

            <SectionWrapper title="CONTATO">
              <ContactSection>
                <div className="first_part">
                  <TextField
                    id="cellphone_1"
                    label="Celular (1)"
                    type="tel"
                    defaultValue={data?.celular1 || ""}
                  />
                  <TextField
                    id="cellphone_2"
                    label="Celular (2)"
                    type="tel"
                    defaultValue={data?.celular2 || ""}
                  />
                  <TextField
                    id="telephone_1"
                    label="Telefone (1)"
                    type="tel"
                    defaultValue={data?.telefone1 || ""}
                  />
                  <TextField
                    id="telephone_2"
                    label="Telefone (2)"
                    type="tel"
                    defaultValue={data?.telefone2 || ""}
                  />
                </div>
              </ContactSection>
            </SectionWrapper>
          </form>

          <Dialog.Close asChild>
            <ModalCloseIcon>
              <md-icon>close</md-icon>
            </ModalCloseIcon>
          </Dialog.Close>

          <Dialog.Close asChild>
            <SaveButtonWrapper>
              <SaveButton onClick={handleSave} />
            </SaveButtonWrapper>
          </Dialog.Close>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}