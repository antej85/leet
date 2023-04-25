<template>
  <div class="employee-card">
    <div class="image">
      <img :src="employee.imagePortraitUrl">
    </div>
    
    <div class="bottom-wrapper">
      <div class="info">
        <div>{{ employee.name }}</div>
        
        <div v-if="employee.office">
          Office {{ employee.office }}
        </div>
      </div>
      
      <div class="social-media">
        <div v-if="employee.linkedIn">
          <a :href="`https://www.linkedin.com${employee.linkedIn}`" target="_blank">
            <img src="@/assets/images/linkedin.png" alt="Employee photo">
          </a>
        </div>

        <div v-if="employee.gitHub">
          <a :href="`https://www.github.com/${employee.gitHub}`" target="_blank">
            <img src="@/assets/images/github.png">
          </a>
        </div>

        <div v-if="employee.twitter">
          <a :href="`https://www.twitter.com/${employee.twitter}`" target="_blank">
            <img src="@/assets/images/twitter.webp">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Employee } from '@/interfaces/employees.interface';

const props = defineProps<{
  employeeData: Employee
}>()

const employee: Employee = props.employeeData;
</script>

<style lang="scss" scoped>
.employee-card {
  font-size: 0.9rem;
  padding: 0 20px;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: $white;
  
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;

    img {
      aspect-ratio: 1/1;
      object-fit: contain;
      width: 100%;
      height: auto;
    }
  }
  
  .bottom-wrapper {
    min-height: 70px;
    margin-top: 20px;
    padding: 8px 0;
    display: flex;
    gap: 8px;
    
    .name {
      flex: 1;
    }

    .social-media {
      flex: 1;
      gap: 4px;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;

      img {
        height: 35px;
        width: auto;
      }
    }
  }

  a {
    color: $theme-secondary-color;
  }
}
</style>