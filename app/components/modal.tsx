import React from "react";
interface ModalProrps {
  message: string;
  onClose: () => void;
}
const ErrorModal: React.FC<ModalProrps> = ({ message, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto p-4">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <div className="mb-4 text-center text-red-500 font-bold text-lg">
              Xato
            </div>
            <div className="text-gray-700 text-justify">{message}</div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
