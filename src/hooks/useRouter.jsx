import { Link } from "react-router-dom";

export const useRouter = () => {
    const push = (path, text) => {
        return <Link to={path}>
            <button>{text}</button>
        </Link>
    };
    return {push};
};