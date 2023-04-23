import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Ref } from 'vue'
import axios from 'axios';
import type { Employee, SortOption } from '@/interfaces/employees.interface';

export const useEmployeesStore = defineStore('employees', () => {
  const API_KEY = import.meta.env.VITE_1337_API_KEY;
  
  const fetchError = ref(false);
  const employeeList: Ref<Employee[]> = ref<Employee[]>([]);
  const selectedOffices = ref<string[]>([]);
  
  const selectedSortOrder = ref<SortOption>({
    label: 'namn',
    value: 'name'
  },);
  
  const sortOptions: Ref<SortOption[]> = ref([
    {
      label: 'namn',
      value: 'name'
    },
    {
      label: 'kontor',
      value: 'office',
    }
  ]);

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

  function toggleOffice(office: string) {
    // Add if not already selected
    if (!selectedOffices.value.includes(office)) {
      selectedOffices.value.push(office);
      return;
    }

    // Remove if previously selected
    if (selectedOffices.value.includes(office)) {
      selectedOffices.value = selectedOffices.value.filter(selectedOffice => selectedOffice !== office);
      return;
    }
  }

  // Filtered list of employees
  const filteredEmployeeList = computed<Employee[]>(() => {
    // Filter list
    let employees = selectedOffices.value.length
      ? employeeList.value.filter(employee => selectedOffices.value.includes(employee.office))
      : employeeList.value;

    // Add sorting
    if (selectedSortOrder.value) {
      const sortOrder = selectedSortOrder.value.value;
      employees = employees.sort((a, b) => a[sortOrder] > b[sortOrder] ? 1 : -1);
    }

    return employees;
  });
  
  return {
    filteredEmployeeList,
    fetchError,
    offices,
    sortOptions,
    selectedSortOrder,
    toggleOffice,
    selectedOffices
  }
});