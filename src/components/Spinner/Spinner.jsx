import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <div className="w-full min-h-[calc(100vh-135px)] flex items-center justify-center">
            <p>
                <HashLoader color="#63AB45" size={65} />
            </p>
        </div>
    );
};

export default Spinner;