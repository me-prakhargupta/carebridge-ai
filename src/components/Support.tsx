"use client";

import { useState } from "react";
import { Sparkles, Send, ShieldCheck, Clock } from "lucide-react";

export default function Support() {
    const [form, setForm] = useState({
        fullname:"",
        contactInfo:"",
        supportType:"",
        urgencyLevel:"",
        description:"",
    });
    
    const [response, setResponse] = useState("");
    const[loading, setLoading] = useState(false);

    const changeHandler = (
        e: React.ChangeEvent<HTMLInputElement | 
        HTMLSelectElement |
        HTMLTextAreaElement>) => {
            const { name, value } = e.currentTarget;

            setForm({ ...form, [name]: value });
        }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    concern: form.description,
                    supportType: form.supportType,
                    patientUrgency: form.urgencyLevel,
                }),
            });

            const data = await res.json();
            const parseText = JSON.parse(data.aiOutput);
            const aiResponse = parseText.autoResponse;
            console.log("Gemini AI Output:", aiResponse);
            setResponse(aiResponse);

            alert("Request received! AI has summarized your concern.");
            setForm({
                fullname:"",
                contactInfo:"",
                supportType:"",
                urgencyLevel:"",
                description:"",
            })
        } catch (error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return(
        <div className="flex flex-col items-center min-h-screen bg-[#D3F2FC]">
            {/* Header Section */}
            <header 
            className="mt-7 px-10 sm:text-center">
                <h1 className="font-bold text-2xl sm:text-3xl uppercase text-[#0464C4]">
                    Care Bridge
                </h1>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0464C4] sm:leading-15">
                    Healthcare Support Portal
                </h2>

                <p className="text-[#1E3A8A] text-sm font-medium sm:leading-10">
                    Get guidance, support, and quick answers when you need them most.
                </p>
            </header>

            {/* AI Response Card - Only shows when response exists */}
            <div className="max-w-3xl mx-auto mt-8 transition-all duration-300 ease-in-out">
                {response && (
                    <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-xl shadow-blue-900/5">
                            <div className="bg-[#0464C4] px-6 py-3 flex items-center justify-between text-white">
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                    <Sparkles size={16} className="text-blue-200" />
                                    Instant Support Acknowledgment
                                </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                                        {response}
                                    </p>
                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs">
                                    <Clock size={14} /> Our specialized team has been   notified and will review your details.
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Main Section - For Support Form */}
            <main className="transition-all duration-300 bg-white rounded-xl shadow-sm bg-white px-10 py-7 rounded-xl max-w mb-15 mt-10">
                <h3 className="sm:text-center font-bold text-3xl mb-1 sm:mb-0 text-[#0464C4]">
                    Request Support
                </h3>

                <p className="
                    text-gray-500
                    text-sm
                    font-medium
                    sm:leading-10
                    sm:text-center
                    ">
                    Please share a few details so we can assist you better.
                </p>

                <form onSubmit={handleSubmit} className="
                    mt-5
                    w-full
                    max-w-2xl">
                        <div className="grid sm:grid-cols-2 sm:gap-6">
                            <div>
                                <label className="
                                    font-medium
                                    text-black/75
                                    ">
                                        Name <span className="text-red-600">*</span>
                                </label>
                                <input className="
                                    bg-gray-100
                                    w-full
                                    rounded-xl 
                                    px-5 py-4
                                    outline-none
                                    mt-2 mb-5
                                    border border-[#0464C4]
                                    focus:outline-none focus:ring-1
                                    focus:ring-[#0464C4]
                                    "
                                    required
                                    type="text"
                                    name="fullname"
                                    value={form.fullname}
                                    onChange={changeHandler}
                                    placeholder="Enter your full name"/>
                            </div>

                            <div>
                                <label className="
                                font-medium
                                text-black/75
                                ">
                                    Contact Information <span className="text-red-600">*</span>
                                </label>
                                <input className="
                                    bg-gray-100
                                    w-full 
                                    rounded-xl 
                                    px-5 py-4
                                    outline-none
                                    mt-2 mb-5
                                    border border-[#0464C4]
                                    focus:outline-none focus:ring-1 
                                    focus:ring-[#0464C4]
                                    "
                                    required
                                    type="text"
                                    name="contactInfo"
                                    value={form.contactInfo}
                                    onChange={changeHandler}
                                    placeholder="Enter your mobile number or email"/>
                            </div>
                        </div>

                        <label className="
                            font-medium
                            text-black/75
                            ">
                            Type of Support Needed <span className="text-red-600">*</span>
                        </label>
                        <select className="
                            bg-gray-100
                            text-gray-500
                            w-full 
                            rounded-xl 
                            px-5 py-4
                            outline-none
                            mt-2
                            border border-[#0464C4]"
                            name="supportType"
                            value={form.supportType}
                            onChange={changeHandler}
                            required>
                            <option value="" disabled>
                                Please select a support type
                            </option>

                            <option value="treatment">
                                Care or treatment guidance
                            </option>

                            <option value="general">
                                General inquiry
                            </option>
                            
                            <option value="appointment">
                                Appointment or scheduling help
                            </option>

                            <option value="emotional">
                               Emotional or mental well-being support
                            </option>
                        </select>
                        <p className="
                        text-xs mb-5 mt-1 px-2
                        text-black/60
                        ">This helps us route your request to the 
                        right support team.</p>

                        <label className="
                            font-medium
                            text-black/75
                            ">
                            Urgency Level <span className="text-red-600">*</span>
                        </label>
                        <select className="
                            bg-gray-100 
                            text-gray-500
                            w-full 
                            rounded-xl 
                            px-5 py-4
                            outline-none
                            mt-2 mb-5
                            border border-[#0464C4]"
                            name="urgencyLevel"
                            value={form.urgencyLevel}
                            onChange={changeHandler}
                            required>
                            <option value="" disabled>
                                Select an option
                            </option>

                            <option 
                            value="low">
                                General questions
                            </option>

                            <option 
                            value="medium">
                                Needs guidance
                            </option>

                            <option value="high">
                                Urgent support needed
                            </option>
                        </select>

                        <label className="
                            font-medium
                            text-black/75
                            ">
                            Please describe your concern <span className="text-red-600">*</span>
                        </label>
                        <textarea className="
                            bg-gray-100
                            text-black
                            w-full h-40
                            rounded-xl 
                            px-5 py-4
                            outline-none
                            mt-2
                            border border-[#0464C4]
                            focus:outline-none focus:ring-1 
                            focus:ring-[#0464C4]
                            "
                            name="description"
                            value={form.description}
                            onChange={changeHandler}
                            placeholder="Briefly describe what kind of support you need or the issue you’re facing."
                            />
                        <p className="
                        text-xs mb-7 px-2
                        text-black/60
                        ">
                            Please avoid sharing sensitive medical 
                            or personal details.
                        </p>

                        <button type="submit" className="
                            w-full
                            border rounded-4xl
                            bg-[#0464C4] hover:bg-[#034FA0]
                            tansition-all duration-300
                            text-[#F9FFF2] text-lg font-semibold
                            px-6 py-3
                            cursor-pointer
                            ">
                                Request Support
                        </button>

                        <p className="
                        text-xs
                        text-center
                        mt-2 mb-7
                        text-black/60
                        ">
                            Our team usually responds within 24 hours.
                        </p>
                </form>
            </main>

            <footer className="
            px-10
            sm:text-center
            mb-20
            ">
                <div>
                    <h4 className="
                        font-bold 
                        text-xl
                        text-[#0464C4]
                        cursor-pointer
                        ">
                            Care Bridge
                        </h4>

                    <p className="
                        text-[#1E3A8A]
                        text-sm mt-3
                        font-medium
                        ">
                            A community-driven NGO supporting cancer patients, caregivers, and families across India.
                    </p>

                    <p className="
                        text-black/50
                        text-xs py-2
                        font-medium
                        leading-5
                        ">
                            This platform provides support, guidance, and information only.
                    </p>
                </div>
            </footer>
        </div>
    );
}