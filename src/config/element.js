import Vue from 'vue'
import '@/assets/scss/element/element-variables.scss'

/*
import { Button, Select, Message, Loading, Form, FormItem, Card,
Input
} from 'element-ui'

Vue.use(Button).use(Select).use(Loading).use(Form).use(FormItem).use(Card).use(Input)
*/
import {Message} from 'element-ui'
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.prototype.$message = Message
