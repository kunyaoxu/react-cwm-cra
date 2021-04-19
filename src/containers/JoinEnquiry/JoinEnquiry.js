import { useState } from 'react';
import qs from 'qs';
import { Form, Checkbox, Row } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Title from './components/Title';
import RecruitRule from './components/RecruitRule';
import {
  Wrapper,
  AntdFrom,
  AntdFromItem,
  AntdButton,
  AntdCol,
  AntdLoadingCircle,
  AntdSelect,
  OptionStyle,
  AntdInput,
  DivideLine,
} from './styled';

const API_URL =
  'https://script.google.com/macros/s/AKfycbwkGUAsiG5lO5z2zde-zh4ntpLNmT_CNZYpfR2eWp0Wj6JYvcAmnCeUYdahIye0LTor/exec';

const { Option } = AntdSelect;

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
  const [tmpData, setTmpData] = useState({ fields: [] });

  console.log(tmpData);

  const onSendForm = (data) => {
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
      {/* 頁面Title */}
      <Title />
      {/* 招收規則 */}
      <RecruitRule />

      {/* Form part */}
      <AntdFrom
        form={form}
        name="control-hooks"
        autoComplete={'off'}
        // onFinish={onSendForm}
        onFieldsChange={() => setTmpData(form.getFieldsValue())}
      >
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕公司名稱" name={['fields', 0]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕貴公司屬性" name={['fields', 1]}>
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="未公開發行">
                  <OptionStyle>未公開發行</OptionStyle>
                </Option>
                <Option value="公開發行，尚未上市櫃">
                  <OptionStyle>公開發行，尚未上市櫃</OptionStyle>
                </Option>
                <Option value="上櫃公司">
                  <OptionStyle>上櫃公司</OptionStyle>
                </Option>
                <Option value="上市公司">
                  <OptionStyle>上市公司</OptionStyle>
                </Option>
                <Option value="外商公司">
                  <OptionStyle>外商公司</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司所屬產業"
              name={['fields', 2]}
            >
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="水泥工業">
                  <OptionStyle>水泥工業</OptionStyle>
                </Option>
                <Option value="食品工業">
                  <OptionStyle>食品工業</OptionStyle>
                </Option>
                <Option value="塑膠工業">
                  <OptionStyle>塑膠工業</OptionStyle>
                </Option>
                <Option value="紡織纖維">
                  <OptionStyle>紡織纖維</OptionStyle>
                </Option>
                <Option value="電機機械">
                  <OptionStyle>電機機械</OptionStyle>
                </Option>
                <Option value="電器電纜">
                  <OptionStyle>電器電纜</OptionStyle>
                </Option>
                <Option value="化學工業">
                  <OptionStyle>化學工業</OptionStyle>
                </Option>
                <Option value="生技醫療">
                  <OptionStyle>生技醫療</OptionStyle>
                </Option>
                <Option value="玻璃陶瓷">
                  <OptionStyle>玻璃陶瓷</OptionStyle>
                </Option>
                <Option value="造紙工業">
                  <OptionStyle>造紙工業</OptionStyle>
                </Option>
                <Option value="鋼鐵工業">
                  <OptionStyle>鋼鐵工業</OptionStyle>
                </Option>
                <Option value="橡膠工業">
                  <OptionStyle>橡膠工業</OptionStyle>
                </Option>
                <Option value="汽車工業">
                  <OptionStyle>汽車工業</OptionStyle>
                </Option>
                <Option value="電子工業">
                  <OptionStyle>電子工業</OptionStyle>
                </Option>
                <Option value="建材營造">
                  <OptionStyle>建材營造</OptionStyle>
                </Option>
                <Option value="航運業">
                  <OptionStyle>航運業</OptionStyle>
                </Option>
                <Option value="觀光餐飲">
                  <OptionStyle>觀光餐飲</OptionStyle>
                </Option>
                <Option value="貿易百貨">
                  <OptionStyle>貿易百貨</OptionStyle>
                </Option>
                <Option value="油電燃氣">
                  <OptionStyle>油電燃氣</OptionStyle>
                </Option>
                <Option value="金融保險">
                  <OptionStyle>金融保險</OptionStyle>
                </Option>
                <Option value="綜合">
                  <OptionStyle>綜合</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司2020年營業規模"
              name={['fields', 3]}
            >
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="1億元以下">
                  <OptionStyle>1億元以下 </OptionStyle>
                </Option>
                <Option value="1~10億元">
                  <OptionStyle>1~10億元</OptionStyle>
                </Option>
                <Option value="10~50億元">
                  <OptionStyle>10~50億元</OptionStyle>
                </Option>
                <Option value="50~100億元">
                  <OptionStyle>50~100億元</OptionStyle>
                </Option>
                <Option value="100億元~500億元">
                  <OptionStyle>100億元~500億元</OptionStyle>
                </Option>
                <Option value="500億元~1000億元">
                  <OptionStyle>500億元~1000億元</OptionStyle>
                </Option>
                <Option value="1000億元以上">
                  <OptionStyle>1000億元以上</OptionStyle>
                </Option>
                <Option value="不方便透露">
                  <OptionStyle>不方便透露</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司目前在台員工人數規模"
              name={['fields', 4]}
            >
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="99人以下">
                  <OptionStyle>99人以下 </OptionStyle>
                </Option>
                <Option value="100~499人">
                  <OptionStyle>100~499人</OptionStyle>
                </Option>
                <Option value="500~999人">
                  <OptionStyle>500~999人</OptionStyle>
                </Option>
                <Option value="1000人以上">
                  <OptionStyle>1000人以上</OptionStyle>
                </Option>
                <Option value="不方便透露">
                  <OptionStyle>不方便透露</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司是否有編製CSR或永續報告書"
              name={['fields', 5]}
            >
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="有">
                  <OptionStyle>有</OptionStyle>
                </Option>
                <Option value="沒有">
                  <OptionStyle>沒有</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司推行CSR的方式"
              name={['fields', 6]}
            >
              <AntdSelect
                placeholder="請選擇"
                suffixIcon={<CaretDownOutlined />}
              >
                <Option value="有專責部門">
                  <OptionStyle>有專責部門</OptionStyle>
                </Option>
                <Option value="有功能性編組（非專責）">
                  <OptionStyle>有功能性編組（非專責）</OptionStyle>
                </Option>
                <Option value="沒有專責部門或編組">
                  <OptionStyle>沒有專責部門或編組</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕請依照貴公司目前的永續現況，自評需精進的領域為 （可複選）"
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
                  <AntdInput placeholder="請填寫" type="text" />
                </label>
              </Checkbox.Group>
            </AntdFromItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕董事長" name={['fields', 8]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕總經理（執行長）"
              name={['fields', 9]}
            >
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司負責永續（CSR、ESG）之最高主管"
              name={['fields', 10]}
            >
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕職稱" name={['fields', 11]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFromItem
              {...layout}
              label="⊕貴公司預計參與永續會培力工作坊之主管"
              name={['fields', 12]}
            >
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕職稱" name={['fields', 13]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕填表人" name={['fields', 14]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕職稱" name={['fields', 15]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕聯絡電話" name={['fields', 16]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕電子信箱" name={['fields', 17]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFromItem {...layout} label="⊕寄件地址" name={['fields', 18]}>
              <AntdInput placeholder="請填寫" type="text" />
            </AntdFromItem>
          </AntdCol>
        </Row>

        <AntdFromItem>
          <AntdButton
            htmlType="button"
            className={isProcessSubmit ? 'loading' : null}
            onClick={(e) => {
              e.currentTarget.blur();
              onSendForm(form.getFieldsValue());
            }}
          >
            {isProcessSubmit ? <AntdLoadingCircle /> : 'SUBMIT'}
          </AntdButton>
        </AntdFromItem>
      </AntdFrom>
    </Wrapper>
  );
};

export default JoinEnquiry;
