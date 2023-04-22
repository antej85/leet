<template>
  <div class="employee-filter">

    <!-- Filter -->
    <div class="filter-wrapper">
      <button 
        v-for="office in offices" 
        class="filter-button"
      >
        {{ office }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmployeesStore } from '@/stores/employees';
import { storeToRefs } from 'pinia';
const employeesStore = useEmployeesStore();
const { offices } = storeToRefs(employeesStore);

</script>

<style lang="scss" scoped>
.employee-filter {
  display: flex;
  margin-bottom: 20px;

  .filter-wrapper {
    display: flex;
    flex: 1;
    gap: 8px;

    .filter-button {
      cursor: pointer;
      border: 0;
      display: flex;
      padding: 8px 12px;
      font-size: 0.8rem;
      align-items: center;
      justify-content: center;
      border-radius: $global-border-radius;
      background-color: $theme-primary-color;
      color: $theme-secondary-color;

      &:hover, .selected {
        filter: brightness(1.2);
      }

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      label {
        cursor: pointer;
      }

      &.selected {
        color: $white;
        background-color: $theme-complement-color;
      }
    }
  }

  .sort-wrapper {
    display: flex;
    justify-content: right;
    .sort-input {
      height: 40px;
      background-color: $white;
      border-radius: $global-border-radius;
      color: $theme-secondary-color;
      background-color: $theme-primary-color;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.555);
      min-width: 90px;
    }
  }
}
</style>