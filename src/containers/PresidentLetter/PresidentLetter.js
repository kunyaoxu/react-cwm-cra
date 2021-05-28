import useMobile from 'hooks/useMobile';
import { Wrapper, Text } from './Styled';

const PresidentLetter = () => {
  const isMobile = useMobile();
  return (
    <Wrapper>
      {isMobile ? (
        <Text>
          今年的422世界地球日，
          <br />
          吳迎春社長於《如何避免氣候災難》行動論壇中，
          <br />
          宣布成立「天下永續會」，
          <br />
          當天並邀請到2020年「天下CSR企業公民獎」
          <br />
          冠軍企業台積電與玉山金控的負責人，
          <br />
          於活動現場進行對談，為天下永續會開啟新頁。
        </Text>
      ) : (
        <Text>
          今年的422世界地球日，吳迎春社長於《如何避免氣候災難》行動論壇中，
          <br />
          宣布成立「天下永續會」，當天並邀請到2020年「天下CSR企業公民獎」冠軍企業台積電與玉山金控的負責人，
          <br />
          於活動現場進行對談，為天下永續會開啟新頁。
        </Text>
      )}

      <Text className="heavy">
        “天下雜誌承諾，要跟大家一起用積極、前瞻、{isMobile ? <br /> : ''}
        放眼天下的心情，一起找出前進的具體作法跟方向。”
      </Text>

      <Text className="heavy">——天下雜誌社長 吳迎春</Text>
    </Wrapper>
  );
};

export default PresidentLetter;
