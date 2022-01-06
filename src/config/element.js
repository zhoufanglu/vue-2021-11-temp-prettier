import Vue from 'vue'
import '@/assets/scss/element/element-variables.scss'

import { Button, Select, Message, Loading } from 'element-ui'

Vue.use(Button).use(Select).use(Loading)

Vue.prototype.$message = Message
