import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SectionWrapper } from "../../components/SectionWrapper"
import { TextField } from "../../components/TextField"
import { SaveButton } from "../../components/SaveButton"
import CanceledClientModal from "../../components/CanceledClientModal"

import {
  AddressSection,
  ContactSection,
  Container,
  Content,
  PersonalDataSection,
  SectionButtons
} from "./styles"

import { useMutation } from '@tanstack/react-query'
import { createAndGetCep } from '../../http/create-and-get-cep'
import { createAddressRequest } from '../../http/create-address'
import { createClientRequest } from '../../http/create-client'
import { useState } from "react"

export function RegisterClient() {
  // Estados e funções para buscar CEP
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")

  const createCepMutation = useMutation({
    mutationFn: createAndGetCep,
    onSuccess: (data) => setCidade(data.cidade),
    onError: (error) => console.error("Erro ao buscar CEP", error),
  })

  const handleCepKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const valorAtual = (e.currentTarget as HTMLInputElement).value
      if (valorAtual.length === 8) {
        createCepMutation.mutate(valorAtual)
      }
    }
  }
  
  const resetForm = () => {
    const ids = [
      'cep', 'neighborhood', 'street', 'house_number', 'complement',
      'name', 'cpf', 'rg', 'born_date', 'genere', 'person_type',
      'filiation', 'observation', 'cellphone_1', 'cellphone_2',
      'telephone_1', 'telephone_2'
    ]
    ids.forEach(id => {
      const input = document.getElementById(id) as HTMLInputElement
      if (input) input.value = ''
    })
    setCidade('')
  }

  const handleSaveClick = async () => {
    try {
      // Coletar e validar dados do formulário

      // Endereço
      const cep = (document.getElementById('cep') as HTMLInputElement)?.value
      const bairro = (document.getElementById('neighborhood') as HTMLInputElement)?.value
      const logradouro = (document.getElementById('street') as HTMLInputElement)?.value
      const numeroEndereco = Number((document.getElementById('house_number') as HTMLInputElement)?.value)
      const complemento = (document.getElementById('complement') as HTMLInputElement)?.value

      if (!cep || !bairro || !logradouro || !numeroEndereco) {
        alert('Preencha todos os campos obrigatórios do endereço!')
        return
      }

      // Cliente
      const nomeCompleto = (document.getElementById('name') as HTMLInputElement)?.value
      const cpf = (document.getElementById('cpf') as HTMLInputElement)?.value
      const rg = (document.getElementById('rg') as HTMLInputElement)?.value
      const dataNascimento = (document.getElementById('born_date') as HTMLInputElement)?.value
      const sexo = (document.getElementById('genere') as HTMLInputElement)?.value
      const tipoPessoa = (document.getElementById('person_type') as HTMLInputElement)?.value
      const filiacao = (document.getElementById('filiation') as HTMLInputElement)?.value
      const observacao = (document.getElementById('observation') as HTMLInputElement)?.value

      const celular1 = (document.getElementById('cellphone_1') as HTMLInputElement)?.value
      const celular2 = (document.getElementById('cellphone_2') as HTMLInputElement)?.value
      const telefone1 = (document.getElementById('telephone_1') as HTMLInputElement)?.value
      const telefone2 = (document.getElementById('telephone_2') as HTMLInputElement)?.value

      if (!nomeCompleto || !cpf || !rg || !dataNascimento || !sexo || !tipoPessoa || !celular1) {
        alert('Preencha todos os campos obrigatórios do cliente!')
        return
      }

      // Após todas as validações, criar endereço
      const endereco = await createAddressRequest({
        cep,
        bairro,
        logradouro,
        numeroEndereco,
        complemento: complemento || null,
      })

      // Criar cliente
      await createClientRequest({
        idEndereco: endereco.idEndereco,
        nomeCompleto,
        cpf,
        rg,
        dataNascimento: new Date(dataNascimento),
        sexo,
        tipoPessoa,
        filiacao,
        observacao: observacao || null,
        celular1,
        celular2: celular2 || null,
        telefone1: telefone1 || null,
        telefone2: telefone2 || null,
      })

      alert('Cliente cadastrado com sucesso!')
      resetForm()
    } catch (error) {
      console.error('Erro ao salvar cliente:', error)
      alert('Erro ao salvar cliente. Tente novamente.')
    }
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
                  <TextField id="person_type" label="Tipo Pessoa" /> 
                  <TextField id="genere" label="Sexo" />
                  <TextField id="born_date" label="Data Nascimento" type="date"/>
                </div>

                <div className="second_part">
                  <div className="name">
                    <TextField id="name" label="Nome Completo" />
                  </div>
                  <div className="cpf">
                    <TextField id="cpf" label="CPF" type="number"/>
                  </div>
                  <div className="rg">
                    <TextField id="rg" label="RG" type="number"/>
                  </div>
                </div>

                <div className="third_part">
                  <div className="filiation">
                    <TextField id="filiation" label="Filiação" multiline />
                  </div>

                  <div className="observation">
                    <TextField id="observation" label="Observação" multiline />
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
                    type="number"
                    value={cep}
                    onChange={(value: string) => setCep(value)}
                    onKeyDown={handleCepKeyDown}
                  />
                  </div>
                  <div className="city">
                    <TextField
                      id="city"
                      label="Cidade"
                      defaultValue={cidade}
                      editable={false} 
                    />
                  </div>
                  <div className="neighborhood">
                    <TextField id="neighborhood" label="Bairro" />
                  </div>
                </div>

                <div className="second_part">
                  <div className="street">
                    <TextField id="street" label="Logradouro" />
                  </div>
                  <div className="house_number">
                    <TextField id="house_number" label="Nº" type="number" />
                  </div>
                  <div className="complement">
                    <TextField id="complement" label="Complemento" />
                  </div>
                </div>
              </AddressSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="CONTATO">
            <form>
              <ContactSection>
                <div className="first_part">
                  <TextField id="cellphone_1" label="Celular (1)" type="tel"/>
                  <TextField id="cellphone_2" label="Celular (2)" type="tel"/>
                  <TextField id="telephone_1" label="Telefone (1)" type="tel"/>
                  <TextField id="telephone_2" label="Telefone (2)" type="tel"/>
                </div>
              </ContactSection>
            </form>
          </SectionWrapper>

          <SectionButtons>
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