import React, {useState} from "react";
import Calendar from "react-calendar";
import {toast} from "react-toastify";
import "react-calendar/dist/Calendar.css";
import {type ConsultationFormData} from "../types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const BookConsultation: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    timeSlot: "",
  });

  const timeSlots: string[] = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(
      "🎉 Consultation booked successfully! We will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      timeSlot: "",
    });
    setDate(new Date());
  };

  const selectedDate = date instanceof Date ? date : new Date();

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative bg-gray-800 text-white py-28 overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Book a Consultation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-balance">
            Let's discuss your digital marketing goals and create a winning
            strategy together
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calendar Section */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Select a Date
                </h3>
                <div className="flex justify-center">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                    className="rounded-2xl border-0 shadow-inner bg-white p-6 w-full"
                  />
                </div>
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-600">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Selected Date:
                  </h4>
                  <p className="text-gray-800 font-medium">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Information
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeSlot"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Time Slot *
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((time: string, index: number) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us about your business, current challenges, and marketing goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary py-4 text-lg font-semibold"
                  >
                    Book Consultation
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By booking a consultation, you agree to our Privacy Policy
                    and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
