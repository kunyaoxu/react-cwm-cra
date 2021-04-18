import { useState } from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import qs from 'qs';
import {
  Wrapper,
  AntdFrom,
  AntdFromItem,
  AntdButton,
  AntdLoadingCircle,
  DivdeLine,
} from './styled';

const API_URL =
  'https://script.google.com/macros/s/AKfycbwkGUAsiG5lO5z2zde-zh4ntpLNmT_CNZYpfR2eWp0Wj6JYvcAmnCeUYdahIye0LTor/exec';

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

const JoinEnquiry = () => {
  const [form] = Form.useForm();
  const [isProcessSubmit, setIsProcessSubmit] = useState(false);

  const onFinish = (data) => {
    if (isProcessSubmit) return;
    setIsProcessSubmit(true);
    console.log(data);

    fetch(
      `${API_URL}?${qs.stringify(
        {
          fields: data.fields.map((val) =>
            Array.isArray(val) ? val.toString() : val ?? null
          ),
        },
        {
          arrayFormat: 'repeat',
        }
      )}`
    )
      .then(() => {
        console.log('fields', data?.fields, 'succes');
      })
      .catch(() => console.error('google sheet error!'))
      .finally(() => setIsProcessSubmit(false));
  };

  return (
    <Wrapper id="join-enquiry">
      <AntdFrom form={form} name="control-hooks" onFinish={onFinish}>
        <AntdFromItem {...layout} label="⊕公司名稱" name={['fields', 0]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕貴公司屬性" name={['fields', 1]}>
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="未公開發行">未公開發行</Option>
            <Option value="公開發行，尚未上市櫃">公開發行，尚未上市櫃</Option>
            <Option value="上櫃公司">上櫃公司</Option>
            <Option value="上市公司">上市公司</Option>
            <Option value="外商公司">外商公司</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕貴公司所屬產業" name={['fields', 2]}>
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="水泥工業">水泥工業</Option>
            <Option value="食品工業">食品工業</Option>
            <Option value="塑膠工業">塑膠工業</Option>
            <Option value="紡織纖維">紡織纖維</Option>
            <Option value="電機機械">電機機械</Option>
            <Option value="電器電纜">電器電纜</Option>
            <Option value="化學工業">化學工業</Option>
            <Option value="生技醫療">生技醫療</Option>
            <Option value="玻璃陶瓷">玻璃陶瓷</Option>
            <Option value="造紙工業">造紙工業</Option>
            <Option value="鋼鐵工業">鋼鐵工業</Option>
            <Option value="橡膠工業">橡膠工業</Option>
            <Option value="汽車工業">汽車工業</Option>
            <Option value="電子工業">電子工業</Option>
            <Option value="建材營造">建材營造</Option>
            <Option value="航運業">航運業</Option>
            <Option value="觀光餐飲">觀光餐飲</Option>
            <Option value="貿易百貨">貿易百貨</Option>
            <Option value="油電燃氣">油電燃氣</Option>
            <Option value="金融保險">金融保險</Option>
            <Option value="綜合">綜合</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label="⊕貴公司2020年營業規模"
          name={['fields', 3]}
        >
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="1億元以下	">1億元以下 </Option>
            <Option value="1~10億元">1~10億元</Option>
            <Option value="10~50億元">10~50億元</Option>
            <Option value="50~100億元">50~100億元</Option>
            <Option value="100億元~500億元">100億元~500億元</Option>
            <Option value="500億元~1000億元">500億元~1000億元</Option>
            <Option value="1000億元以上">1000億元以上</Option>
            <Option value="不方便透露">不方便透露</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label="⊕貴公司目前在台員工人數規模"
          name={['fields', 4]}
        >
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="99人以下	">99人以下 </Option>
            <Option value="100~499人">100~499人</Option>
            <Option value="500~999人">500~999人</Option>
            <Option value="1000人以上">1000人以上</Option>
            <Option value="不方便透露">不方便透露</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label="⊕貴公司是否有編製CSR或永續報告書"
          name={['fields', 5]}
        >
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="有">有</Option>
            <Option value="沒有">沒有</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label="⊕貴公司推行CSR的方式"
          name={['fields', 6]}
        >
          <Select placeholder="請選擇" suffixIcon={<CaretDownOutlined />}>
            <Option value="有專責部門">有專責部門</Option>
            <Option value="有功能性編組（非專責）">
              有功能性編組（非專責）
            </Option>
            <Option value="沒有專責部門或編組">沒有專責部門或編組</Option>
          </Select>
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label={
            <>
              ⊕請依照貴公司目前的永續現況，自評需精進的領域為
              <br />
              （可複選）
            </>
          }
          name={['fields', 7]}
        >
          <Checkbox.Group>
            <Checkbox value="公司治理">公司治理</Checkbox>
            <Checkbox value="企業承諾（員工照顧與培育）">
              企業承諾（員工照顧與培育）
            </Checkbox>
            <Checkbox value="社會參與">社會參與</Checkbox>
            <Checkbox value="環境永續">環境永續</Checkbox>
            {/* TODO: 其他 */}
            <label>
              <Checkbox value="其它">其它</Checkbox>
              {/* TODO: 其他的輸入 */}
              <Input placeholder="請輸入" type="text" />
            </label>
          </Checkbox.Group>
        </AntdFromItem>
        <DivdeLine />
        <AntdFromItem {...layout} label="⊕董事長" name={['fields', 8]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem
          {...layout}
          label="⊕總經理（執行長）"
          name={['fields', 9]}
        >
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <DivdeLine />
        <AntdFromItem
          {...layout}
          label="⊕貴公司負責永續（CSR、ESG）之最高主管"
          name={['fields', 10]}
        >
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕職稱" name={['fields', 11]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <DivdeLine />
        <AntdFromItem
          {...layout}
          label="⊕貴公司預計參與永續會培力工作坊之主管"
          name={['fields', 12]}
        >
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕職稱" name={['fields', 13]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <DivdeLine />
        <AntdFromItem {...layout} label="⊕填表人" name={['fields', 14]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕職稱" name={['fields', 15]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕聯絡電話" name={['fields', 16]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕電子信箱" name={['fields', 17]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>
        <AntdFromItem {...layout} label="⊕寄件地址" name={['fields', 18]}>
          <Input placeholder="請輸入" type="text" />
        </AntdFromItem>

        <AntdFromItem>
          <AntdButton
            htmlType="submit"
            className={isProcessSubmit ? 'loading' : null}
            onClick={(e) => e.currentTarget.blur()}
          >
            {isProcessSubmit ? <AntdLoadingCircle /> : 'SUBMIT'}
          </AntdButton>
        </AntdFromItem>
      </AntdFrom>
    </Wrapper>
  );
};

export default JoinEnquiry;
