import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Ref } from 'vue'
import axios from 'axios';
import type { Employee } from '@/interfaces/employees.interface';

export const useEmployeesStore = defineStore('employees', () => {
  const API_KEY = import.meta.env.VITE_1337_API_KEY;
  
  const fetchError = ref(false);
  const employeeList: Ref<Employee[]> = ref<Employee[]>([]);

  const selectedOffices = ref<string[]>([]);

  // Store init - Load employees
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

  // Get offices from employee list
  const offices = computed(() => {
    const offices: string[] = [];
    
    employeeList.value.forEach(employee => {
      if (employee.office) {
        if (!offices.includes(employee.office)) {
          offices.push(employee.office);
        }
      }
    });
    return offices.sort();
  });
  
  return {
    employeeList,
    fetchError,
    offices,
    selectedOffices
  }
});