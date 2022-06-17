import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email('Неверная почта').required("Обязательное поле"),
    name: yup.string().min(6,'Слишком короткое имя').max(12,'Слишком длинное имя').required("Обязательное поле"),
    password: yup.string().min(1, 'Пароль не должен быть пустым)').required("Обязательное поле"),
    acceptTerms: yup.bool().oneOf([true], 'Обязательное поле').required(),
});

export default schema;