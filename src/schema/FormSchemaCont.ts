import * as Yup from "yup";
import { IformikValues } from "../Components/CustomForm/CustomFormContato";

const cpfRegex = /([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})/;

const dataNascRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const telRegex =
  /\(? [0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;

const instaRegex =
  /(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/;

const formYup: Yup.SchemaOf<IformikValues> = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve conter mais de 2 caracteres")
    .required("*Campo Obrigatório"),

  email: Yup.string().email("Email Inválido").required("*Campo Obrigatório"),

  cpf: Yup.string()
    .matches(cpfRegex, "CPF inválido")
    .required("*Campo Obrigatório"),

  dataNasc: Yup.string()
    .matches(dataNascRegex, "Data de nascimento inválida")
    .required("*Campo Obrigatório"),

  tel: Yup.string()
    .matches(telRegex, "Número de telefone inválido")
    .required("*Campo Obrigatório"),

  instagram: Yup.string()
    .matches(instaRegex, "User inválido")
    .required("*Campo Obrigatório"),

  declaro: Yup.boolean()
    .oneOf([true], "*Campo Obrigatório")
    .required("*Campo Obrigatório"),
});

export default formYup;
