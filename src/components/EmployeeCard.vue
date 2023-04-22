<template>
  <div class="employee-card">
    <img class="image">
    
    <div class="bottom-wrapper">
      <div class="info">
        <h5>{{ employee.name }}</h5>
      </div>
      
      <div class="social-media">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from '@/interfaces/employees.d.ts';

const props = defineProps<{
  employeeData: Employee
}>()

const employee: Employee = props.employeeData;
</script>

<style lang="scss" scoped>
.employee-card {
  // width: 250px;
  // height: 300px;
  width: 200px;
  height: 200px;
  padding: 20px;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: $white;

  .image {
    width: 100%;
  }

  .bottom-wrapper {
    display: flex;

    .name {
      flex: 1;
    }

    .social-media {
      flex: 1;
    }
  }

  a {
    color: $theme-secondary-color;
  }
}
</style>