import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // URL dasar API Anda

// Fetch Folders
export const fetchFolders = async () => {
  try {
    const response = await axios.get(`${API_URL}/folders`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching folders:', error);
    throw error; 
  }
};

// Fetch Subfolders
export const fetchSubfolders = async (folderId) => {
  try {
    const response = await axios.get(`${API_URL}/subfolders?folder_id=${folderId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching subfolders:', error);
    throw error; 
  }
};

// Fetch Files
export const fetchFiles = async (folderId) => {
  try {
    const response = await axios.get(`${API_URL}/files?folder_id=${folderId}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error; 
  }
};
