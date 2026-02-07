
import '@/styles/adminGlobals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import AdminClientLayout from './AdminClientLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <AdminClientLayout>{children}</AdminClientLayout>
      </body>
    </html>
  );
}
