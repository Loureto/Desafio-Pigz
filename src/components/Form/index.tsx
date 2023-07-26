import { Button } from "../Button"
import Input from "../Input"
import { formData } from "./data"
import * as S from "./styles"

function Form() {
  return (
    <S.FormContainer>
      <div>
        <h2>{formData.title}</h2>
        <p>{formData.subtitle}</p>

        <div className="box-input">
          <Input
            label="Nome"
            placeholder="Leonercio Goesfeeld"
          />

          <Input
            label="E-mail"
            placeholder="leonercio.goesfeeld@email.com"
          />
          <Input
            label="Telefone"
            placeholder="(95) 99876-5432"
          />
        </div>

        <p>{formData.description}</p>

        <Button>Confirmar</Button>
        
      </div>
    </S.FormContainer>
  )
}

export default Form