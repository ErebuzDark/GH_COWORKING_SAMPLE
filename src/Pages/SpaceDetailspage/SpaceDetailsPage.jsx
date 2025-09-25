import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Option } = Select;

import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Wifi,
  Coffee,
  Printer,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";

const SpaceDetailsPage = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    bookingType: "tour",
    message: "",
  });

  const handleChange = (changedValues) => {
    setFormData({ ...formData, ...changedValues });
  };

  // Mock data - in real app, fetch based on spaceId
  const spaceData = {
    "hot-desk": {
      title: "Hot Desk",
      description:
        "Perfect for freelancers and remote workers who need flexibility",
      price: "₱1,500/day",
      image:
        "https://cdn-ilblgal.nitrocdn.com/LtOfWpqsvRVXueIPEGVTBaxpvBAGgdOw/assets/images/optimized/rev-022236d/www.officespacesoftware.com/wp-content/uploads/iStock-1308274885-blog-hero.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        capacity: "1 Person",
        tables: "Shared desks",
        storage: "Personal locker",
        internet: "High-speed WiFi",
        hours: "6 AM - 10 PM",
        location: "Open workspace area",
      },
      features: [
        "Shared workspace",
        "High-speed WiFi",
        "Coffee & Tea",
        "Printing access",
        "Community events",
        "24/7 security",
        "Air conditioning",
        "Natural lighting",
      ],
    },
    "private-office": {
      title: "Private Office",
      description: "Dedicated space for teams and growing businesses",
      price: "₱25,000/month",
      image:
        "https://www.officeevolution.com/wp-content/uploads/2025/02/OE-Arlington-Private-Office-scaled-1.jpg",
      gallery: [
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        capacity: "2-8 People",
        tables: "Executive desk + meeting table",
        storage: "Filing cabinet + shelves",
        internet: "Dedicated fiber connection",
        hours: "24/7 access",
        location: "Private floor",
      },
      features: [
        "Private room for 2-8 people",
        "24/7 access",
        "Meeting room credits",
        "Storage space",
        "Custom branding",
        "Phone booth access",
        "Kitchen access",
        "Receptionist services",
      ],
    },
  };

  const currentSpace = spaceData[spaceId] || spaceData["hot-desk"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Booking request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url(${currentSpace.image})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/offers")}
          className="absolute top-6 left-6 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 text-slate-900 p-3 rounded-full shadow-lg transition-all"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-36 left-52 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {currentSpace.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              {currentSpace.description}
            </p>
            <div className="text-3xl font-bold text-amber-400">
              {currentSpace.price}
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div
        className="relative bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${Math.max(-scrollY * 0.3, -200)}px)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Specifications Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 p-6 rounded-xl transition-colors duration-300">
                <Users className="text-blue-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Capacity</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.capacity}
                </p>
              </div>

              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 p-6 rounded-xl transition-colors duration-300">
                <MapPin className="text-green-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.location}
                </p>
              </div>

              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 p-6 rounded-xl transition-colors duration-300">
                <Clock className="text-purple-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.hours}
                </p>
              </div>

              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100 p-6 rounded-xl transition-colors duration-300">
                <Coffee className="text-amber-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Tables</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.tables}
                </p>
              </div>

              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 p-6 rounded-xl transition-colors duration-300">
                <Printer className="text-red-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Storage</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.storage}
                </p>
              </div>

              <div className="bg-white border border-slate-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-indigo-100 p-6 rounded-xl transition-colors duration-300">
                <Wifi className="text-indigo-600 mb-3" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Internet</h3>
                <p className="text-gray-700">
                  {currentSpace.specifications.internet}
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {currentSpace.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {currentSpace.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${currentSpace.title} view ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                />
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Book This Space or Schedule a Tour
            </h2>

            <Form
              layout="vertical"
              initialValues={formData}
              onValuesChange={(_, allValues) => handleChange(allValues)}
              onFinish={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              {/* Full Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="john@example.com" />
                </Form.Item>
              </div>

              {/* Phone + Booking Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <Form.Item label="Phone Number" name="phone">
                  <Input placeholder="(123) 456-7890" />
                </Form.Item>

                <Form.Item
                  label="Booking Type"
                  name="bookingType"
                  rules={[
                    { required: true, message: "Please select a booking type" },
                  ]}
                >
                  <Select placeholder="Select booking type">
                    <Option value="tour">Schedule a Tour</Option>
                    <Option value="booking">Book This Space</Option>
                    <Option value="inquiry">General Inquiry</Option>
                  </Select>
                </Form.Item>
              </div>

              {/* Date + Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <Form.Item
                  label="Preferred Date"
                  name="date"
                  rules={[{ required: true, message: "Please select a date" }]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    disabledDate={(current) =>
                      current && current < dayjs().startOf("day")
                    }
                  />
                </Form.Item>

                <Form.Item label="Preferred Time" name="time">
                  <TimePicker style={{ width: "100%" }} format="HH:mm" />
                </Form.Item>
              </div>

              {/* Message */}
              <Form.Item label="Additional Message" name="message">
                <TextArea
                  rows={4}
                  placeholder="Tell us about your specific requirements or any questions you have..."
                />
              </Form.Item>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold flex items-center justify-center"
                  icon={<CalendarOutlined />}
                >
                  Submit Request
                </Button>

                <Button
                  size="large"
                  className="border-2 border-slate-400 text-slate-700 hover:bg-slate-400 hover:text-white font-semibold"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us Directly
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailsPage;
