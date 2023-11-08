import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Doao.css";

const Doao = () => {
  const navigate = useNavigate();

  const onButtonContainer2Click = useCallback(() => {
    navigate("/download");
  }, [navigate]);

  const onElementsNavigationLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onElementsNavigationLinkContainer1Click = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  return (
    <div className="doao">
      <div className="content30">
        <img
          className="image-placeholder-icon2"
          alt=""
          src="/image-placeholder2.svg"
        />
        <div className="footer4">
          <div className="nayzak4">© 2023 Waave</div>
        </div>
        <div className="content31">
          <div className="content32">
            <div className="text5">
              <div className="header6">
                <div className="badge5">
                  <div className="content33">
                    <img className="iconclose10" alt="" src="/iconclose.svg" />
                    <div className="indicator5" />
                    <div className="hello5">SALE</div>
                    <img className="iconclose10" alt="" src="/iconclose.svg" />
                  </div>
                </div>
                <div className="powered-by-ai4">Powered by AI</div>
                <div className="ns-ajude-a">
                  Nós ajude a conquistar nossos objetivos
                </div>
              </div>
              <div className="com-uma-simples">
                Com uma simples doação você contribuirá para a criação da IA
              </div>
            </div>
            <div className="button17">
              <img
                className="iconarrow-right25"
                alt=""
                src="/iconarrowright.svg"
              />
              <div className="get-started15">Doar</div>
              <img
                className="iconarrow-right25"
                alt=""
                src="/iconarrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className="content34">
          <div className="branding3">
            <div className="waave4">Waave</div>
          </div>
          <div className="buttons3">
            <div className="button18">
              <div className="content35">
                <img
                  className="iconclose10"
                  alt=""
                  src="/iconarrowright1.svg"
                />
              </div>
              <img className="iconclose10" alt="" src="/iconarrowright1.svg" />
            </div>
            <div className="button19" onClick={onButtonContainer2Click}>
              <img className="iconclose10" alt="" src="/iconarrowright1.svg" />
              <div className="get-started16">Download</div>
              <img className="iconclose10" alt="" src="/iconarrowright1.svg" />
            </div>
          </div>
          <div className="elementsnavigationlink-group3">
            <div
              className="elementsnavigationlink9"
              onClick={onElementsNavigationLinkContainerClick}
            >
              <div className="button18">
                <div className="content33">
                  <img
                    className="iconclose10"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started16">Início</div>
                </div>
                <img
                  className="iconclose10"
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
            </div>
            <div
              className="elementsnavigationlink9"
              onClick={onElementsNavigationLinkContainer1Click}
            >
              <div className="button18">
                <div className="content33">
                  <img
                    className="iconclose10"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started16">Sobre</div>
                </div>
                <img
                  className="iconclose10"
                  alt=""
                  src="/iconchevrondown.svg"
                />
              </div>
            </div>
            <div className="content35">
              <div className="content35">
                <div className="content33">
                  <img
                    className="iconclose10"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started16">Doação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doao;
