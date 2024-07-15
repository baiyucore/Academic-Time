import { ref } from "vue"
import { defineStore } from "pinia" 
export const Createinfor = defineStore('createid',()=>{
  const createid = ref("")
  function transmit(create_id : string){
    createid.value =create_id
  };

  return {createid , transmit}
},  { persist: true   })


