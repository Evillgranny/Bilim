import { CloseModal } from "../../model/modals/CloseModal";

export let closeModal = new CloseModal('.contacts-cross', '.contacts-form', '#app')
closeModal.modalClose()