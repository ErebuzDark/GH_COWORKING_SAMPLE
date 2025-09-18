import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  message,
  Select,
  DatePicker,
  TimePicker,
  Radio,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MessageOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      message.success(
        "Your message has been sent successfully! We'll get back to you within 24 hours."
      );
      form.resetFields();
    } catch {
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-amber-400 text-2xl" />,
      title: "Phone",
      content: "+63 2 1234 5678",
      subtitle: "Mon-Fri 9AM-6PM",
    },
    {
      icon: <MailOutlined className="text-amber-400 text-2xl" />,
      title: "Email",
      content: "ghtower@tower.ph",
      subtitle: "24/7 Support",
    },
    {
      icon: <EnvironmentOutlined className="text-amber-400 text-2xl" />,
      title: "Address",
      content: "South Dr, Greenhills Center, San Juan City",
      subtitle: "Metro Manila, Philippines",
    },
    {
      icon: <ClockCircleOutlined className="text-amber-400 text-2xl" />,
      title: "Business Hours",
      content: "Monday - Friday: 8AM - 8PM",
      subtitle: "Weekend: 9AM - 6PM",
    },
  ];

  const locations = [
    { value: "makati", label: "Makati CBD" },
    { value: "bgc", label: "Bonifacio Global City" },
    { value: "ortigas", label: "Ortigas Center" },
    { value: "alabang", label: "Alabang Business District" },
  ];

  const spaceTypes = [
    { value: "hot-desk", label: "Hot Desk" },
    { value: "private-office", label: "Private Office" },
    { value: "meeting-room", label: "Meeting Room" },
    { value: "event-space", label: "Event Space" },
    { value: "virtual-office", label: "Virtual Office" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Title
            level={1}
            className="!text-5xl font-bold mb-4 text-slate-800"
          >
            Get in <span className="text-amber-400">Touch</span>
          </Title>
          <Paragraph className="!text-lg text-slate-500 max-w-2xl mx-auto">
            Ready to find your perfect workspace? Contact us today and let's
            discuss how we can help your business thrive.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {/* Contact Info */}
          <Col xs={24} lg={10}>
            <div className="rounded-xl p-6 bg-white h-full shadow-lg">
              <Title level={3} className="!text-slate-800 mb-6">
                <MessageOutlined className="mr-2" />
                Contact Information
              </Title>

              <Space direction="vertical" size="large" className="w-full">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 text-slate-700"
                  >
                    {info.icon}
                    <div>
                      <Text strong className="block text-base text-slate-800">
                        {info.title}
                      </Text>
                      <Text className="block text-sm text-slate-600">
                        {info.content}
                      </Text>
                      <Text type="secondary" className="text-xs text-slate-400">
                        {info.subtitle}
                      </Text>
                    </div>
                  </div>
                ))}
              </Space>

              <Divider />

              <div className="h-52 rounded-lg overflow-hidden shadow-sm">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9625743136367!2d121.04652537510613!3d14.60120788588521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b756a16f7b29%3A0x44945a71b35c1bc2!2sGH%20Tower%20Offices%20at%20Greenhills!5e0!3m2!1sen!2sph!4v1758162127529!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
          </Col>

          {/* Form */}
          <Col xs={24} lg={14}>
            <div className="rounded-xl p-5 bg-white shadow-lg">
              <Title level={3} className="!text-slate-800 mb-6">
                <UserOutlined className="mr-2" />
                Send us a Message
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark="optional"
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, message: "Enter first name" }]}
                    >
                      <Input placeholder="John" prefix={<UserOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[{ required: true, message: "Enter last name" }]}
                    >
                      <Input placeholder="Doe" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="Email Address"
                      rules={[
                        { required: true, message: "Enter email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input placeholder="john@example.com" prefix={<MailOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[{ required: true, message: "Enter phone number" }]}
                    >
                      <Input placeholder="+63 912 345 6789" prefix={<PhoneOutlined />} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item name="company" label="Company Name">
                  <Input placeholder="Your Company Name" prefix={<TeamOutlined />} />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="location"
                      label="Preferred Location"
                      rules={[{ required: true, message: "Select a location" }]}
                    >
                      <Select placeholder="Select location">
                        {locations.map((loc) => (
                          <Option key={loc.value}>{loc.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="spaceType"
                      label="Space Type"
                      rules={[{ required: true, message: "Select a space type" }]}
                    >
                      <Select placeholder="Select space type">
                        {spaceTypes.map((s) => (
                          <Option key={s.value}>{s.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="visitType"
                  label="How would you like to proceed?"
                  rules={[{ required: true, message: "Please select an option" }]}
                >
                  <Radio.Group>
                    <Radio value="tour">Schedule a Tour</Radio>
                    <Radio value="quote">Get a Quote</Radio>
                    <Radio value="info">General Inquiry</Radio>
                  </Radio.Group>
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item name="preferredDate" label="Preferred Date">
                      <DatePicker className="w-full" placeholder="Select date" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item name="preferredTime" label="Preferred Time">
                      <TimePicker className="w-full" format="h:mm A" use12Hours placeholder="Select time" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Enter your message" }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Tell us more about your workspace needs..."
                    showCount
                    maxLength={500}
                  />
                </Form.Item>

                <Form.Item className="mb-0">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    className="w-full h-12 text-base font-semibold bg-amber-400 border-amber-400 hover:bg-amber-500 hover:border-amber-500"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Extra Info */}
        <div className="mt-12 p-10 rounded-xl text-center bg-white shadow-lg">
          <Title level={3} className="!text-slate-800 mb-4">
            Need Immediate Assistance?
          </Title>
          
          <Paragraph className="!text-base text-slate-600 mb-6">
            For urgent inquiries or immediate booking assistance, feel free to
            call us directly or visit one of our locations.
          </Paragraph>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              icon={<PhoneOutlined />}
              className="bg-slate-800 border-slate-800 hover:bg-slate-700 hover:border-slate-700"
            >
              Call Now: +63 2 1234 5678
            </Button>
            <Button
              size="large"
              icon={<EnvironmentOutlined />}
              className="border-slate-800 text-slate-800 hover:bg-slate-100"
            >
              Find Locations
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
