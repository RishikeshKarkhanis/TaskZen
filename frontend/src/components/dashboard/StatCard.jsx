function StatCard({ title, value, icon: Icon, color = "emerald" }) {
    const colors = {
        emerald: {
            bg: "bg-emerald-100",
            text: "text-emerald-600",
        },
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
        },
        gray: {
            bg: "bg-slate-100",
            text: "text-slate-600",
        },
        green: {
            bg: "bg-green-100",
            text: "text-green-600",
        },
    };

    const selectedColor = colors[color] || colors.emerald;

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-5">

            <div className="flex items-center gap-4">

                <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedColor.bg}`}
                >
                    <Icon
                        size={22}
                        className={selectedColor.text}
                    />
                </div>

                <h2 className="text-4xl font-bold leading-none text-slate-900">
                    {value}
                </h2>

            </div>

            <p className="mt-3 text-slate-500 font-medium">
                {title}
            </p>

        </div>
    );
}

export default StatCard;