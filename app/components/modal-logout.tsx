import React from "react";
interface ConfirmLogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}
const ConfirmLogoutModal: React.FC<ConfirmLogoutModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <div className="mb-4 text-center text-gray-900 font-bold text-lg">
              Tizimda chiqish
            </div>
            <div className="text-gray-700 text-justify">
              Haqiqatan ham tizimdan chiqmoqchimisiz?
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={onCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                Bekor qilish
              </button>
              <button
                onClick={onConfirm}
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Chiqishni tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
