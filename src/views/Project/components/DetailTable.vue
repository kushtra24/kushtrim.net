<script setup lang="ts">
defineProps<{
  caption: string
  headers: string[]
  rows: string[][]
}>()
</script>

<template>
  <!-- Rows become stacked blocks below sm. Display changes drop table semantics, so the roles keep them. -->
  <div class="overflow-hidden rounded-[20px] bg-surface-container-lowest shadow-xs">
    <table role="table" class="w-full text-left">
      <caption class="sr-only">{{ caption }}</caption>
      <thead role="rowgroup" class="max-sm:hidden">
        <tr role="row">
          <th
            v-for="header in headers"
            :key="header"
            role="columnheader"
            scope="col"
            class="p-4 text-label-eyebrow text-on-surface-variant uppercase lg:px-6"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr
          v-for="row in rows"
          :key="row[0]"
          role="row"
          class="border-t border-surface-container first:max-sm:border-t-0 max-sm:block max-sm:p-4"
        >
          <template v-for="(cell, index) in row" :key="index">
            <th
              v-if="index === 0"
              role="rowheader"
              scope="row"
              class="p-4 align-top text-label-md font-semibold text-on-surface max-sm:block max-sm:p-0 lg:px-6"
            >
              {{ cell }}
            </th>
            <td
              v-else
              role="cell"
              class="p-4 align-top text-body-sm text-on-surface-variant max-sm:mt-1 max-sm:block max-sm:p-0 lg:px-6"
            >
              {{ cell }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
