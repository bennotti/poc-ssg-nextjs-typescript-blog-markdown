import React, { FC } from "react";
import { Button, Input, Col, Form, Divider, Row } from 'antd';
import { AnyObject } from "@core/types";

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
};

export const CustomInput: FC<CustomInputProps> = ({
  placeholder = '',
  type = '',
  disabled = false
}) => {
  if (type === 'password') {
    return (
      <>
        <Input.Password
          disabled={disabled}
          placeholder={placeholder}
          autoComplete='off'
        />
      </>
    )
  }


  return (
    <>
      <Input
        disabled={disabled}
        placeholder={placeholder}
        autoComplete='off'
      />
    </>
  );
};

interface CustomFieldProps extends CustomInputProps {
  name: string;
  label: string;
};

export const CustomField: FC<CustomFieldProps> = ({
  name = '',
  label = '',
  type = '',
  disabled = false,
  placeholder = ''
}) => (
  <Form.Item
    label={label}
    name={name}
  >
    <CustomInput type={type} disabled={disabled} placeholder={placeholder} />
  </Form.Item>
);

interface EmailPasswordFormProps {
  onSubmit: (data: AnyObject) => void;
  submitText?: string;
};

export const EmailPasswordForm: FC<EmailPasswordFormProps> = ({
  submitText = 'Confirmar',
  onSubmit
}) => {
  const [form] = Form.useForm();

  const handleOnSubmit = async () => {
    const values = await form.validateFields();
    onSubmit?.(values);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      requiredMark={false}
    >
      <CustomField name="email" type="email" label="Email Address" placeholder="Email" />
      <CustomField name="password" type="password" label="Password" placeholder="Email" />

      <Form.Item>
        <Button onClick={handleOnSubmit}>{submitText}</Button>
      </Form.Item>
    </Form>
  );
}

export default EmailPasswordForm;