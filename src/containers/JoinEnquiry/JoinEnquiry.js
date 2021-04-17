import { Form, Input, Button, Select, Row } from 'antd';
import qs from 'qs';
import { Wrapper, AntdFrom, AntdFromItem } from './styled';

const API_URL =
  'https://script.google.com/macros/s/AKfycbxxQ2nlf-8v24S775ZUMGhKDv9vb5tnNg-CGMQjLOtVVI-RZn7cp0s2EyloFxzO6eR-uQ/exec';

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const JoinEnquiry = () => {
  const [form] = Form.useForm();

  const onFinish = (data) => {
    console.log(data);

    fetch(
      `${API_URL}?${qs.stringify(
        { fields: data.fields.map((val) => val ?? null) },
        {
          arrayFormat: 'repeat',
        }
      )}`
    )
      .then(() => {
        console.log('fields', data?.fields, 'succes');
      })
      .catch(() => console.error('google sheet error!'));
  };

  return (
    <Wrapper id="join-enquiry">
      <AntdFrom form={form} name="control-hooks" onFinish={onFinish}>
        <AntdFromItem {...layout} label="Gender" name={['fields', 0]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="Gender" name={['fields', 1]}>
          <Select placeholder="請選擇">
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem {...layout} label="Gender" name={['fields', 2]}>
          <Select placeholder="2請選擇">
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </AntdFromItem>
      </AntdFrom>
    </Wrapper>
  );
};

export default JoinEnquiry;
