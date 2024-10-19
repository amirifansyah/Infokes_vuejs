<template>
    <div class="sub-folder-list">
      <ul class="space-y-1">
        <li v-if="subfolders.length === 0" class="text-gray-500">No subfolders available</li>
        <li
          v-for="subfolder in subfolders"
          :key="subfolder.id"
          @click="selectSubfolder(subfolder.id)"
          class="cursor-pointer p-2 rounded hover:bg-blue-100 flex items-center"
        >
          <FolderIcon class="h-5 w-5 mr-2 text-gray-500" />
          {{ subfolder.name }}
        </li>
      </ul>
      <h3 class="text-lg font-semibold mt-4">Files</h3>
      <ul class="space-y-1">
        <li v-if="files.length === 0" class="text-gray-500">No files available</li>
        <li v-for="file in files" :key="file.id" class="p-2 bg-gray-100 rounded">
          {{ file.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { FolderIcon } from '@heroicons/vue/16/solid';
  import { fetchSubfolders, fetchFiles } from '../api/folderApi';
  
  export default {
    components: {
      FolderIcon,
    },
    props: ['folderId'],
    data() {
      return {
        subfolders: [],
        files: [],
      };
    },
    watch: {
      folderId: 'loadSubfoldersAndFiles',
    },
    methods: {
      async loadSubfoldersAndFiles() {
        if (!this.folderId) return;
        await this.loadSubfolders();
        await this.loadFiles(); // Load files as well
      },
      async loadSubfolders() {
        try {
          this.subfolders = await fetchSubfolders(this.folderId);
        } catch (error) {
          console.error('Error loading subfolders:', error);
        }
      },
      async loadFiles() {
        try {
          this.files = await fetchFiles(this.folderId); // Fetch files based on folderId
        } catch (error) {
          console.error('Error loading files:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan CSS khusus jika diperlukan */
  </style>
  