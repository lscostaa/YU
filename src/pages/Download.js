import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Download.css";

const Download = () => {
  const navigate = useNavigate();

  const onElementsNavigationLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onElementsNavigationLinkContainer1Click = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  const onElementsNavigationLinkContainer2Click = useCallback(() => {
    navigate("/doao");
  }, [navigate]);

  return (
    <div className="download">
      <div className="content21">
        <div className="image-placeholder1">
          <img
            className="paste-image-icon1"
            alt=""
            src="/paste-image1@2x.png"
          />
          <img
            className="waave-logo-nova-11"
            alt=""
            src="/waave-logo-nova-11.svg"
          />
          <div className="content22">
            <div className="text4">
              <div className="header5">
                <div className="badge4">
                  <div className="content23">
                    <img className="iconclose8" alt="" src="/iconclose.svg" />
                    <div className="indicator4" />
                    <div className="hello4">SALE</div>
                    <img className="iconclose8" alt="" src="/iconclose.svg" />
                  </div>
                </div>
                <div className="powered-by-ai3">Powered by AI</div>
                <div className="obrigado-por-baixar">
                  Obrigado por baixar o Waave
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer3">
          <div className="nayzak3">© 2023 Waave</div>
        </div>
        <div className="content24" />
        <div className="content25">
          <div className="branding2">
            <div className="waave3">Waave</div>
          </div>
          <div className="buttons2">
            <div className="button13">
              <div className="content26">
                <img className="iconclose8" alt="" src="/iconarrowright1.svg" />
              </div>
              <img className="iconclose8" alt="" src="/iconarrowright1.svg" />
            </div>
          </div>
          <div className="elementsnavigationlink-group2">
            <div
              className="elementsnavigationlink6"
              onClick={onElementsNavigationLinkContainerClick}
            >
              <div className="button13">
                <div className="content23">
                  <img
                    className="iconclose8"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started12">Início</div>
                </div>
                <img className="iconclose8" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div
              className="elementsnavigationlink6"
              onClick={onElementsNavigationLinkContainer1Click}
            >
              <div className="button13">
                <div className="content23">
                  <img
                    className="iconclose8"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started12">Sobre</div>
                </div>
                <img className="iconclose8" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div
              className="elementsnavigationlink6"
              onClick={onElementsNavigationLinkContainer2Click}
            >
              <div className="content26">
                <div className="content23">
                  <img
                    className="iconclose8"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started12">Doação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
