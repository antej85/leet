<template>
  <div class="employee-filter">

    <!-- Filter -->
    <div class="filter-wrapper">
      <button 
        v-for="office in offices" 
        @click="employeesStore.toggleOffice(office)"
        :class="{ selected : selectedOffices.includes(office) }"
        class="filter-button"
      >
        {{ office }}
      </button>
    </div>

    <!-- Sorting -->
    <div
      v-if="selectedOffices.length !== 1"
      class="sort-wrapper"
    >
      <select 
        v-model="selectedSortOrder"
        class="sort-input"
      >
        <option 
          v-for="option in sortOptions" 
          :value="option"
          :key="option.value"
        >
          Sortera på {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEmployeesStore } from '@/stores/employees';
import { storeToRefs } from 'pinia';
const employeesStore = useEmployeesStore();
const {
  offices, 
  sortOptions, 
  selectedSortOrder, 
  selectedOffices,
} = storeToRefs(employeesStore);

</script>

<style lang="scss" scoped>
.employee-filter {
  display: flex;
  margin-bottom: 20px;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  padding: 20px;
  row-gap: 20px;
  flex-direction: column;

  @include breakpoint(small) {
    flex-direction: unset;
  }

  .filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 8px;

    .filter-button {
      display: flex;
      cursor: pointer;
      border: 0;
      height: 38px;
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
      background-color: $white;
      color: $black;
      border-radius: $global-border-radius;
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.555);
      min-width: 90px;
    }
  }
}
</style>