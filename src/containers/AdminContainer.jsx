import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Adminpage } from '../components/Adminpage';
import 'react-toastify/dist/ReactToastify.css';

export function AdminContainer() {
  return (
    <div>
      <Adminpage />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
