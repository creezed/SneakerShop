import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email('Неверная почта').required("Обязательное поле"),
    password: yup.string().min(1, 'Пароль не должен быть пустым)').required("Обязательное поле"),
    acceptRemember: yup.bool().oneOf([true, false])
});

export default schema;