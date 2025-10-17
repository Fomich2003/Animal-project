import { toast } from "react-toastify"

function notify(message, type) {
    switch (type) {
        case "error":
            toast.error(message)
            break;

        case "success":
            toast.success(message)
            break;

        default:
            toast.info(message)
            break;
    }
}

export default notify