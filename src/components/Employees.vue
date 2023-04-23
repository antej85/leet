<template>
  <h2>The fellowship of tretton37</h2>

  <!-- Error message -->
  <div v-if="fetchError">
    <p>Ooops, något gick fel, kunde inte hämta anställda...</p>
  </div>
  
  <!-- Loader -->
  <div 
    v-if="!filteredEmployeeList.length && !fetchError" 
    class="loader"
  >
    <img src="@/assets/images/preloader.gif">
  </div>

  <!-- Employees -->
  <div v-if="filteredEmployeeList?.length">
    <EmployeeFilter />

    <div class="employees">
      <EmployeeCard
        v-for="employee in filteredEmployeeList"
        :key="employee.name"
        :employee-data="employee"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useEmployeesStore } from '@/stores/employees';
import EmployeeCard from '@/components/EmployeeCard.vue';
import EmployeeFilter from '@/components/EmployeeFilter.vue';
import { storeToRefs } from 'pinia';

const employeesStore = useEmployeesStore();
const { filteredEmployeeList, fetchError } = storeToRefs(employeesStore);
</script>
  
<style lang="scss" scoped>
  h2 {
    color: $theme-secondary-color;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .employees {
    display: grid;
    align-items: center;
    gap: 20px;
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