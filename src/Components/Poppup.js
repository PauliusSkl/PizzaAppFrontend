import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Poppup = ({message, type, duration}) => {
 
    const toastOptions = {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      };
    
      if (type === 'error') {
        toast.error(message, toastOptions);
      } else {
        toast.success(message, toastOptions);
      }

};

export  default Poppup;