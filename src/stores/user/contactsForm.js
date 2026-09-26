import { createStore } from "solid-js/store";

export const [formdata,setFormdata] = createStore({
  name:"",email:"",message:""
})
