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
import { useEmployeesStore } from '@/stores/empoyees';
import EmployeeCard from '@/components/EmployeeCard.vue';
import { storeToRefs } from 'pinia';

const employeesStore = useEmployeesStore();
const { employeeList, fetchError } = storeToRefs(employeesStore);
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