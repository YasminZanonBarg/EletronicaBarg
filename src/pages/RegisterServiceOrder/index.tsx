import "@material/web/icon/icon.js"
import '@material/web/textfield/outlined-text-field.js';

import IconWhatsApp from '../../assets/whatsapp_icon.png'
import { NavigationRail } from "../../components/NavigationRail"
import { Header } from "../../components/Header"
import { TextField } from "../../components/TextField"


import { AccompanimentSection, ClientSection, Container, Content, DefaultSection, EditIcon, EquipmentSection, InputWrapper, SectionButtons, StyledTextField, WhatsAppButton } from "./styles"
import { SectionWrapper } from "../../components/SectionWrapper";

export function RegisterServiceOrder() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; 


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
                defaultValue="1234678"  
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
          </form>

          <SectionWrapper title="APARELHO">
            <form>
              <EquipmentSection>
                <div className="first_part">
                  <TextField id="equipment" label="Aparelho" />
                  <TextField id="brand" label="Marca" />
                  <TextField id="model" label="Modelo" />
                  <TextField id="serie" label="Série" />
                </div>

                <div className="second_part">
                  <TextField id="defect" label="Defeito" multiline />
                  <TextField id="accessories" label="Acessórios" multiline />
                </div>
              </EquipmentSection>
            </form>
          </SectionWrapper>

          <SectionWrapper title="CLIENTE">
            <ClientSection>
              <InputWrapper>
                <StyledTextField id="equipment" defaultValue="Pesquise um cliente" />
                <EditIcon>
                  <md-icon>edit</md-icon>
                </EditIcon>
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
                    <TextField id="location" label="Localização Aparelho"/>
                  </div>
                  <button>
                    <md-icon>stars</md-icon>
                  </button>
                  <div className="pre_budget">
                    <TextField id="pre_budget" type="number" label="Pré-Orçamento" />
                  </div>
                </div>

                <div className="second_part">
                  <div className="first_half">
                    <div className="text-field-wrapper">
                      <TextField id="reasons" label="Motivos" multiline />
                    </div>
                    <div className="text-field-wrapper">
                      <TextField id="notes" label="Notas" multiline />
                    </div>
                  </div>
                  <div className="second_half">
                    <div className="text-field-wrapper">
                      <TextField id="workforce" type="number" label="Mão de Obra"/>
                    </div>
                    <div className="text-field-wrapper">
                      <TextField id="parts" type="number" label="Peças"/>
                    </div>
                    <p>Total: R$ 200,00</p>
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
              <button className="save_button">Salvar</button>
              <button className="simple_button">Sair</button>
            </div>
          </SectionButtons>

        </main>

      </Content>
    </Container>
  );
}
