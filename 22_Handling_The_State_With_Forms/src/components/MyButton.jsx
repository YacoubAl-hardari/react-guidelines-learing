export default function MyButton({type,color}) {
    return (
        <button type={type} className={`w-full px-4 py-2 bg-${color}-600 text-white rounded-md shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}>
        إرسال
    </button>
    );
}

