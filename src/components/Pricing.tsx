import React from "react";

const PricingPlans: React.FC = () => {
    const plans = [
        {
            price: "45$",
            period: "شهرياً",
            title: "الخطة المبتدئة",
            features: [
                { text: "مشاريع غير محدودة", active: true },
                { text: "هاشتاقات محسّنة", active: true },
                { text: "لوحة التحكم", active: true },
                { text: "+300 مكون", active: false },
                { text: "دعم عبر الدردشة", active: false },
                { text: "تخزين سحابي", active: false },
            ],
            button: "اختر الخطة",
            popular: false,
            selected: false,
        },
        {
            price: "60$",
            period: "شهرياً",
            title: "الخطة الأساسية",
            features: [
                { text: "مشاريع غير محدودة", active: true },
                { text: "هاشتاقات محسّنة", active: true },
                { text: "لوحة التحكم", active: true },
                { text: "+300 مكون", active: true },
                { text: "دعم عبر الدردشة", active: false },
                { text: "تخزين سحابي", active: false },
            ],
            button: "تم الاختيار",
            popular: true,
            selected: true,
        },
        {
            price: "79$",
            period: "شهرياً",
            title: "خطة المؤسسات",
            features: [
                { text: "مشاريع غير محدودة", active: true },
                { text: "هاشتاقات محسّنة", active: true },
                { text: "لوحة التحكم", active: true },
                { text: "+300 مكون", active: true },
                { text: "دعم عبر الدردشة", active: true },
                { text: "تخزين سحابي", active: true },
            ],
            button: "اختر الخطة",
            popular: false,
            selected: false,
        },
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl" dir="rtl">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`flex-1 rounded-2xl p-6 shadow-lg text-center hover:shadow-[0px_0px_100px_-17px_rgba(147,_51,_234,_0.40)] duration-500  ${plan.selected
                                ? "bg-purple-700 text-white scale-105 "
                                : "bg-card text-white "
                            } transition transform`}
                    >
                        {/* السعر */}
                        <h2 className="text-3xl font-bold">{plan.price}</h2>
                        <p className="text-sm mb-4">{plan.period}</p>

                        {/* العنوان */}
                        <span
                            className={`inline-block   px-3 py-1 rounded-full text-sm font-semibold mb-6 ${plan.selected
                                    ? "bg-white/20 text-white"
                                    : "bg-purple-100 text-purple-600"
                                }`}
                        >
                            {plan.title}

                        </span>

                        {/* المميزات */}
                        <ul className="text-right space-y-3 mb-6">
                            {plan.features.map((f, i) => (
                                <li
                                    key={i}
                                    className={`flex items-center gap-2 ${plan.selected ? "text-white" : "text-white"
                                        }`}
                                >
                                    {f.active ? (
                                        <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="100px"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#ffffff" strokeWidth="100px"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#7e23cf" stroke-linecap="round" stroke-linejoin="round" strokeWidth="3.5"></polyline> </g> </g> </g></svg>) : (
                                      <svg fill="#7E23CF" width="25px" height="25px" viewBox="-20 -20 240.00 240.00" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#7E23CF"><g id="SVGRepo_bgCarrier" strokeWidth="3"><rect x="-20" y="-20" width="240.00" height="240.00" rx="120" fill="#ffffff" strokeWidth="3"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>
                                      )}
                                    {f.text}
                                </li>
                            ))}
                        </ul>

                        {/* زر */}
                        <button
                            className={`w-full py-2 rounded-xl font-semibold ${plan.selected
                                    ? "bg-card/90 text-white hover:bg-background duration-1000"
                                    : "bg-purple-600 text-white hover:bg-purple-700"
                                }`}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;
