import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue'
import axios from 'axios';
import type { Employee } from '@/interfaces/employees.interface';

export const useEmployeesStore = defineStore('employees', () => {
  const API_KEY = import.meta.env.VITE_1337_API_KEY;
  
  const fetchError = ref(false);
  const employeeList: Ref<Employee[]> = ref<Employee[]>([]);

  axios.get('https://api.1337co.de/v3/employees', {
  headers: {
    'Authorization': API_KEY
  }
})
  .then(res => employeeList.value = res.data)
  .catch(err => {
    console.log(err);
    fetchError.value = true;
  });
  
  return {
    employeeList,
    fetchError
  }
});