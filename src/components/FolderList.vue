<template>
    <div class="folder-list">
      <ul class="space-y-1">
        <li
          v-for="folder in folders"
          :key="folder.id"
          @click="selectFolder(folder.id)"
          :class="['cursor-pointer p-2 rounded hover:bg-blue-100', { 'bg-blue-200': selectedFolderId === folder.id }]"
        >
          <div class="flex items-center">
            <FolderIcon class="h-5 w-5 mr-2 text-gray-500" />
            {{ folder.name }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { FolderIcon } from '@heroicons/vue/16/solid';
  import { fetchFolders } from '../api/folderApi';
  
  export default {
    components: {
      FolderIcon,
    },
    data() {
      return {
        folders: [],
        selectedFolderId: null,
      };
    },
    created() {
      this.loadFolders();
    },
    methods: {
      async loadFolders() {
        try {
          this.folders = await fetchFolders();
        } catch (error) {
          console.error('Error loading folders:', error);
        }
      },
      selectFolder(folderId) {
        this.selectedFolderId = folderId;
        this.$emit('folder-selected', folderId);
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan CSS khusus jika diperlukan */
  </style>
  