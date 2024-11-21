
function Modal({ children }) {
    return (
        <div className="fixed flex inset-0 items-center justify-center z-50">
            <div className="fixed inset-0 bg-[#000000E0]" ></div>
            {children}
        </div>
    );
};

export default Modal;