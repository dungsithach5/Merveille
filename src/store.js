import { reactive } from 'vue';

export const store = reactive({
  isModalVisible: false,
  successMessage: '',
  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  },
  setSuccessMessage(message) {
    this.successMessage = message;
  },
  clearSuccessMessage() {
    this.successMessage = '';
  },
});