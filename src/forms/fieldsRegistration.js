import Field from '../models/FormField';
import InputEmail from '../components/FormElements/InputEmail';
import InputText from '../components/FormElements/InputText';
import InputPassword from '../components/FormElements/InputPassword';
import InputPhone from '../components/FormElements/InputPhone';

export default {
  email: Object.assign({}, Field, {
    id: 'email',
    label: 'Введите e-mail',
    name: 'email',
    component: InputEmail
  }),
  password: Object.assign({}, Field, {
    id: 'password',
    label: 'Введите пароль',
    name: 'password',
    component: InputPassword
  }),
  password_confirmation: Object.assign({}, Field, {
    id: 'password_confirmation',
    label: 'Повторите введённы пароль',
    name: 'password_confirmation',
    component: InputPassword
  }),
  name: Object.assign({}, Field, {
    id: 'name',
    label: 'Введите имя',
    name: 'name',
    component: InputText
  }),
  surname: Object.assign({}, Field, {
    id: 'surname',
    label: 'Введите фамилию',
    name: 'surname',
    component: InputText
  }),
  phone: Object.assign({}, Field, {
    id: 'phone',
    label: 'Введите телефон',
    name: 'phone',
    component: InputPhone
  }),
}