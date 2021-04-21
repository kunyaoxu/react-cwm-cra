/* eslint-disable max-len */
// eslint-disable-next-line import/no-named-as-default
import Wrapper from './Styled';

const Description = () => (
  <Wrapper>
    {/* Desktop */}
    <article className="only-desktop">
      <p>新型冠狀病毒（COVID-19）疫情延燒至今，除了減緩全球社會與經濟發展，</p>
      <p>
        也讓我們意識到未來經營路上「不確定性」已成常態。從中美對峙、新冠疫情，
      </p>
      <p>到氣候變遷帶來的新風險，對企業而言，此時正面臨前所未遇的挑戰，</p>
      <p>但也是化危機為轉機的新契機。</p>
    </article>
    <article className="only-desktop">
      <p>
        此刻的決策，攸關企業基業長青。ESG是解方，但憑一己之力、一家公司的努力，
      </p>
      <p>
        或力有未逮；集眾人之力，連結有志一同的企業，共同交流、共同分享、共同學習，
      </p>
      <p>社會邁向共好，企業永續也將不再困難與遙遠。</p>
    </article>

    {/* Mobile */}
    <article className="only-mobile">
      <p>
        新型冠狀病毒（COVID-19）疫情延燒至今，除了減緩全球社會與經濟發展，也讓我們意識到未來經營路上「不確定性」已成常態。從中美對峙、新冠疫情，到氣候變遷帶來的新風險，對企業而言，此時正面臨前所未遇的挑戰，但也是化危機為轉機的新契機。
      </p>
    </article>
    <article className="only-mobile">
      <p>
        此刻的決策，攸關企業基業長青。ESG是解方，但憑一己之力、一家公司的努力，或力有未逮；集眾人之力，連結有志一同的企業，共同交流、共同分享、共同學習，社會邁向共好，企業永續也將不再困難與遙遠。
      </p>
    </article>
  </Wrapper>
);

export default Description;
