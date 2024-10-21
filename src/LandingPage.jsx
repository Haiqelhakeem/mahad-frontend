import React from "react";
import heroImage from "./assets/hero.jpg";
import { Button, Checkbox, Form, Input, Select } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function LandingPage() {
  return (
    <>
      <div
        className="hero min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Webiste Setoran Hafalan Santri
            </h1>
            <h3 className="text-xl font-semibold text-stone-300">
              Ma'had UIN Sunan Gunung Djati Bandung
            </h3>
            <p className="mb-5 text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              ratione, exercitationem iusto nemo molestias sapiente eius
              voluptas qui? Rerum dolore sint architecto veritatis aperiam a
              asperiores quibusdam assumenda similique ad.
            </p>
            <button className="btn btn-success">Setor Hafalan</button>
          </div>
        </div> */}
        <div className="bg-white rounded-xl p-5 text-center">
          <h1 className="mb-5 text-5xl font-bold text-gray-800">
            Website Setoran Hafalan Santri
          </h1>
          <h3 className="text-xl font-semibold text-gray-600">
            Ma'had UIN Sunan Gunung Djati Bandung
          </h3>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="mentor"
              label="Mentor"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Pilih mentor"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="mentor 1">Mentor 1</Option>
                <Option value="mentor 2">Mentor 2</Option>
                <Option value="mentor 3">Mentor 3</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="mahasantri"
              label="Mahasantri"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Nama Mahasantri"
                // onChange={onGenderChange}
                allowClear
              >
                <Option value="mahasantri 1">Mahasantri 1</Option>
                <Option value="mahasantri 2">Mahasantri 2</Option>
                <Option value="mahasantri 3">Mahasantri 3</Option>
              </Select>
            </Form.Item>

            {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
