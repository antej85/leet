<template>
  <h2>The fellowship of tretton37</h2>

  <!-- Error message -->
  <div v-if="fetchError">
    <p>Ooops, något gick fel, kunde inte hämta anställda...</p>
  </div>
  
  <!-- Loader -->
  <div v-if="!employeeList.length && !fetchError">
    <img src="@/assets/images/preloader.gif">
  </div>

  <!-- Employees -->
  <div
    v-if="employeeList?.length"
    class="employees"
  >
    <EmployeeCard
      v-for="employee in employeeList"
      :key="employee.name"
      :employee-data="employee"
    />
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
import axios from 'axios';

import EmployeeCard from '@/components/EmployeeCard.vue';
import type { Employee } from '@/interfaces/employees.d.ts';
  
const API_KEY = import.meta.env.VITE_1337_API_KEY;

const fetchError = ref(false);
const employeeList: Ref<Employee[]> = ref<Employee[]>([]);

// Get employees
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
</script>
  
<style lang="scss" scoped>
  h2 {
    color: $theme-secondary-color;
  }

  .employees {
    display:grid;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;

    @include breakpoint(small) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint(medium) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @include breakpoint(large) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>