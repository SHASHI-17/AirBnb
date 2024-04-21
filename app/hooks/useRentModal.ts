import { create } from 'zustand';

interface RentModalStoreType {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalStoreType>(set => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRentModal;