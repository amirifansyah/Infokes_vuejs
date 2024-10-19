<template>
  <div class="flex h-screen bg-gray-100">
    <div class="w-1/4 bg-white shadow-md p-4">
      <h2 class="text-lg font-semibold mb-2">Folder Structure</h2>
      <FolderList @folder-selected="handleFolderSelected" />
    </div>
    <div class="flex-1 p-4 bg-gray-50">
      <h2 class="text-lg font-semibold mb-2">Subfolders</h2>
      <SubFolderList :folderId="selectedFolderId" />
    </div>
  </div>
</template>

<script>
import FolderList from './components/FolderList.vue';
import SubFolderList from './components/SubFolderList.vue';

export default {
  components: {
    FolderList,
    SubFolderList,
  },
  data() {
    return {
      selectedFolderId: null,
    };
  },
  methods: {
    handleFolderSelected(folderId) {
      this.selectedFolderId = folderId;
    },
  },
};
</script>

<style>
/* Tambahkan CSS khusus jika diperlukan */
</style>
