import "@material/web/icon/icon.js"
import * as Dialog from "@radix-ui/react-dialog";

import { TextField } from "../TextField";
import { SectionWrapper } from "../SectionWrapper";
import { SearchButton } from "../../components/SearchButton";
import { SaveButton } from "../../components/SaveButton"

import { ModalOverlay, ModalContent, EditIcon, ModalCloseIcon, SaveButtonWrapper, SearchContainer } from "./styles";
import { AddressSection, ContactSection, PersonalDataSection } from "../../pages/RegisterClient/styles";

export default function SearchClient() {
  return (
    <Dialog.Root>
      {/* Trigger que abre o modal */}
      <Dialog.Trigger asChild>
        <EditIcon>
          <md-icon>edit</md-icon>
        </EditIcon>
      </Dialog.Trigger>

      {/* Conteúdo do modal */}
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <SearchContainer>
            <SearchButton placeholder="Pesquisar cliente por cpf" size="small"/>
          </SearchContainer>
        
          <SectionWrapper title="DADOS PESSOAIS">
            <form>
              <PersonalDataSection>
                <div className="first_part">
                  <TextField id="register_date" label="Data Cadastro" type="date"/>
                  <TextField id="person_type" label="Tipo Pessoa" />
                  <TextField id="genere" label="Sexo" />
                  <TextField id="born_date" label="Data Nascimento" type="date" />
                </div>

                <div className="second_part">
                  <div className="name">
                    <TextField id="name" label="Nome Completo" />
                  </div>
                  <div className="cpf">
                    <TextField id="cpf" label="CPF" type="number" />
                  </div>
                  <div className="rg">
                    <TextField id="rf" label="RG" type="number" />
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
                    <TextField id="cep" label="CEP" type="number" />
                  </div>
                  <div className="city">
                    <TextField id="city" label="Cidade" />
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
                  <TextField id="cellphone_1" label="Celular (1)" type="tel" />
                  <TextField id="cellphone_2" label="Celular (2)" type="tel" />
                  <TextField id="telephone_1" label="Telefone (1)" type="tel" />
                  <TextField id="telephone_2" label="Telefone (2)" type="tel" />
                </div>
              </ContactSection>
            </form>
          </SectionWrapper>

          <Dialog.Close asChild>
            <ModalCloseIcon>
              <md-icon>close</md-icon>
            </ModalCloseIcon>
          </Dialog.Close>

          {/* Adicionando o botão de salvar no final */}
          <SaveButtonWrapper>
            <SaveButton />
          </SaveButtonWrapper>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
