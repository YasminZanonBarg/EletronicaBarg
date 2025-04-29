import "@material/web/icon/icon.js"

import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { SectionWrapper } from "../../components/SectionWrapper"
import { TextField } from "../../components/TextField"
import { SaveButton } from "../../components/SaveButton"
import CanceledClientModal from "../../components/CanceledClientModal"

import { AddressSection, ContactSection, Container, Content, PersonalDataSection, SectionButtons } from "./styles"

import { useMutation } from '@tanstack/react-query'
import { createAndGetCep } from '../../http/create-and-get-cep'
import { useState } from "react"

export function RegisterClient() {
  const [cidade, setCidade] = useState('')

  const createCepMutation = useMutation({
    mutationFn: (codigoCep: string) => createAndGetCep(codigoCep),
    onSuccess: (data) => {
      setCidade(data.cidade)
    },
    onError: (error) => {
      console.error('Erro ao buscar CEP', error)
    }
  })

  const handleCepEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const cepValue = e.currentTarget.value
    if (cepValue.length === 8 && e.key === 'Enter') {
      createCepMutation.mutate(cepValue)
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
                    id="register_date" 
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
                    <TextField id="rf" label="RG" type="number"/>
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
                      onKeyDown={handleCepEnter} 
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
              <SaveButton />
              <CanceledClientModal />
            </div>
          </SectionButtons>
        </main>

      </Content>
    </Container>
  );
}
