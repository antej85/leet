<template>
  <div class="employee-card">
    <div class="image">
      <img :src="employee.imagePortraitUrl">
    </div>
    
    <div class="bottom-wrapper">
      <div class="info">
        <div>{{ employee.name }}</div>
        <div>{{ employee.office }}</div>
      </div>
      
      <div class="social-media">
        <div v-if="employee.linkedIn">
          <a :href="`https://www.linkedin.com${employee.linkedIn}`" target="_blank">
            <img src="@/assets/images/linkedin.png">
          </a>
        </div>

        <div v-if="employee.gitHub">
          <a :href="`https://www.github.com/${employee.gitHub}`" target="_blank">
            <img src="@/assets/images/github.png">
          </a>
        </div>

        <div v-if="employee.twitter">
          <a :href="`https://www.linkedin.com${employee.twitter}`" target="_blank">
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
  height: 420px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  background-color: $white;
  
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 340px;
    object-fit: contain;

    img {
      width: 100%;
      height: auto;
    }
  }
  
  .bottom-wrapper {
    margin-top: 8px;
    min-height: 70px;
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