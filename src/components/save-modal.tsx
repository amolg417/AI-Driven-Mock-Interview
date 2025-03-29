import Modal from "./modal";
import { Button } from "./ui/button";

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const SaveModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: SaveModalProps) => {
  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone you can't edit or re-answer this question again!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <button disabled={loading} className="h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground" onClick={onClose}>
          Cancel
        </button>
        <button
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-800 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onConfirm}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};
