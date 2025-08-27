export default function Button({ item }) {
    return (
        <button className="font-bold w-full h-[20px] rounded-xl bg-blue-violet text-light-yellow p-4 flex items-center justify-center cursor-pointer">
            {item}
        </button>
    )
}