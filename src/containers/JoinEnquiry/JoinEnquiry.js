import { useState, useRef, useEffect } from 'react';
import qs from 'qs';
import { Form, Checkbox, Row, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Title from './components/Title';
import RecruitRule from './components/RecruitRule';
import SortInfo from './components/SortInfo';
import {
  Wrapper,
  AntdFrom,
  AntdFormItem,
  AntdButton,
  AntdCol,
  AntdLoadingCircle,
  AntdSelect,
  AntdCheckbox,
  OptionStyle,
  OtherCol,
  CheckboxCol,
  AntdInput,
  DivideLine,
} from './styled';
import ContactInfo from './components/ContactInfo';

const API_URL =
  'https://script.google.com/macros/s/AKfycbxkuGOmF0C8doxvtLfpMXK-yzGB0T3UDb22nDZZ2s48LpKhAcstNracI5IHGq-5Eu4e/exec';

const { Option } = AntdSelect;

const OTHER = '@@OTHER@@';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const JoinEnquiry = () => {
  const [form] = Form.useForm();
  const ref = useRef();
  const [isProcessSubmit, setIsProcessSubmit] = useState(false);
  const [otherStr, setOtherStr] = useState(null);

  useEffect(() => {
    if (otherStr !== null && otherStr?.length === 0) {
      ref.current.focus();
    } else if (otherStr?.length === 0) {
      ref.current.blur();
    }
  }, [otherStr]);

  const onSendForm = (data) => {
    if (isProcessSubmit) return;

    const fields = data?.fields?.map((val) =>
      Array.isArray(val)
        ? val
            .filter((val) => (val === OTHER ? false : val))
            .join(',')
            .concat(otherStr ? ',' + otherStr : '')
        : val ?? null
    );

    // 判斷陣列中是否有任一個元素為 null or undefined
    if (!fields.every((val) => val !== null && val !== undefined)) {
      message.error({
        content: (
          <div style={{ textAlign: 'left' }}>
            非常抱歉，您的表單尚未完成填寫，
            <br />
            麻煩您確實填寫每個欄目後送出，謝謝您！
          </div>
        ),
        duration: 3,
      });
      return;
    }

    setIsProcessSubmit(true);

    fetch(
      `${API_URL}?${qs.stringify(
        {
          fields,
        },
        {
          arrayFormat: 'repeat',
        }
      )}`
    )
      .then(() => {
        // console.log('fields', data?.fields, 'succes');
        setOtherStr(null);
        form.resetFields();
        message.success({
          content: (
            <div style={{ textAlign: 'left' }}>
              您申請的表單已成功送出，3日內將有專人與您聯繫。
              <br />
              <br />
              若有任何問題請來電：
              <br />
              02-20578627#284
              <br />
              天下雜誌 行銷業務部副理 章庭維
            </div>
          ),
          duration: 3,
        });
      })
      .catch(() => {
        message.error({
          content: (
            <div style={{ textAlign: 'left' }}>
              抱歉，您的表單送出失敗，
              <br />
              請再次確認並送出，謝謝您！
            </div>
          ),
          duration: 3,
        });
        console.error('google sheet error!');
      })
      .finally(() => setIsProcessSubmit(false));
  };

  return (
    <Wrapper id="join-enquiry">
      {/* 頁面Title */}
      <Title />
      {/* 招收規則 */}
      <RecruitRule />

      {/* Form part */}
      <AntdFrom form={form} name="control-hooks" autoComplete={'off'}>
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕公司名稱" name={['fields', 0]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕貴公司屬性" name={['fields', 1]}>
              <AntdSelect
                disabled={isProcessSubmit}
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
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司所屬產業"
              name={['fields', 2]}
            >
              <AntdSelect
                disabled={isProcessSubmit}
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
                <Option value="其它">
                  <OptionStyle>其它</OptionStyle>
                </Option>
              </AntdSelect>
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司2020年營業規模"
              name={['fields', 3]}
            >
              <AntdSelect
                disabled={isProcessSubmit}
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
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司目前在台員工人數規模"
              name={['fields', 4]}
            >
              <AntdSelect
                disabled={isProcessSubmit}
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
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司是否有編製CSR或永續報告書"
              name={['fields', 5]}
            >
              <AntdSelect
                disabled={isProcessSubmit}
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
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司推行CSR的方式"
              name={['fields', 6]}
            >
              <AntdSelect
                disabled={isProcessSubmit}
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
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕請依照貴公司目前的永續現況，自評需精進的領域為 （可複選）"
              name={['fields', 7]}
            >
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  <CheckboxCol>
                    <Row>
                      <AntdCheckbox disabled={isProcessSubmit} value="公司治理">
                        公司治理
                      </AntdCheckbox>
                      <AntdCheckbox
                        disabled={isProcessSubmit}
                        value="企業承諾(員工照顧與培育)"
                      >
                        企業承諾(員工照顧與培育)
                      </AntdCheckbox>
                    </Row>
                    <Row>
                      <AntdCheckbox disabled={isProcessSubmit} value="社會參與">
                        社會參與
                      </AntdCheckbox>
                      <AntdCheckbox disabled={isProcessSubmit} value="環境永續">
                        環境永續
                      </AntdCheckbox>
                    </Row>
                  </CheckboxCol>
                  <OtherCol>
                    <AntdCheckbox
                      disabled={isProcessSubmit}
                      value={OTHER}
                      onChange={() => {
                        if (
                          form
                            .getFieldsValue()
                            ?.fields?.[7]?.find((val) => val === OTHER)
                        ) {
                          setOtherStr(null);
                        } else {
                          setOtherStr('');
                        }
                      }}
                    >
                      其它
                    </AntdCheckbox>
                    <AntdInput
                      disabled={null === otherStr || isProcessSubmit}
                      ref={ref}
                      value={otherStr}
                      onChange={(e) => setOtherStr(e.target.value)}
                      placeholder="請填寫"
                      type="text"
                    />
                  </OtherCol>
                </Row>
              </Checkbox.Group>
            </AntdFormItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕董事長" name={['fields', 8]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕總經理（執行長）"
              name={['fields', 9]}
            >
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司負責永續（CSR、ESG）之最高主管"
              name={['fields', 10]}
            >
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕職稱" name={['fields', 11]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFormItem
              {...layout}
              label="⊕貴公司預計參與永續會培力工作坊之主管"
              name={['fields', 12]}
            >
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕職稱" name={['fields', 13]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <DivideLine />
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕填表人" name={['fields', 14]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕職稱" name={['fields', 15]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕聯絡電話" name={['fields', 16]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕電子信箱" name={['fields', 17]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <Row>
          <AntdCol>
            <AntdFormItem {...layout} label="⊕寄件地址" name={['fields', 18]}>
              <AntdInput
                disabled={isProcessSubmit}
                placeholder="請填寫"
                type="text"
              />
            </AntdFormItem>
          </AntdCol>
        </Row>
        <SortInfo />
        <AntdFormItem style={{ marginBottom: '8px' }}>
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
        </AntdFormItem>
        <ContactInfo />
      </AntdFrom>
    </Wrapper>
  );
};

export default JoinEnquiry;
