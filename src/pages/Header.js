import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/download");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/download");
  }, [navigate]);

  const onElementsNavigationLinkContainer1Click = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  const onElementsNavigationLinkContainer2Click = useCallback(() => {
    navigate("/doao");
  }, [navigate]);

  return (
    <div className="header">
      <main className="content" id="capa">
        <img
          className="image-placeholder-icon"
          id="imagem"
          alt=""
          src="/image-placeholder@2x.png"
        />
        <div className="footer">
          <div className="nayzak">© 2023 Waave</div>
        </div>
        <div className="content1">
          <div className="content2">
            <div className="text">
              <div className="header1">
                <div className="badge">
                  <div className="content3">
                    <img className="iconclose" alt="" src="/iconclose.svg" />
                    <div className="indicator" />
                    <div className="hello">SALE</div>
                    <img className="iconclose" alt="" src="/iconclose.svg" />
                  </div>
                </div>
                <div className="powered-by-ai">Powered by AI</div>
                <h1 className="utilize-gestos-para" id="texto1">
                  Utilize gestos para controlar todo seu computador
                </h1>
              </div>
              <div className="com-simples-movimentos">
                Com simples movimentos você pode fazer diversas funções no seu
                computador.
              </div>
            </div>
            <button className="button" id="download2" onClick={onButtonClick}>
              <img
                className="iconarrow-right"
                alt=""
                src="/iconarrowright.svg"
              />
              <div className="get-started">Download</div>
              <img
                className="iconarrow-right"
                alt=""
                src="/iconarrowright.svg"
              />
            </button>
          </div>
        </div>
        <div className="content4">
          <div className="branding">
            <h3 className="waave" id="waave">
              Waave
            </h3>
          </div>
          <div className="buttons">
            <div className="button1">
              <div className="elementsnavigationlink">
                <img className="iconclose" alt="" src="/iconarrowright1.svg" />
              </div>
              <img className="iconclose" alt="" src="/iconarrowright1.svg" />
            </div>
            <button
              className="button2"
              disabled={true}
              id="download"
              onClick={onButton1Click}
            >
              <img className="iconclose" alt="" src="/iconarrowright1.svg" />
              <div className="get-started1">Download</div>
              <img className="iconclose" alt="" src="/iconarrowright1.svg" />
            </button>
          </div>
          <nav className="elementsnavigationlink-group" id="navi">
            <div className="elementsnavigationlink">
              <div className="button1">
                <div className="content3">
                  <img
                    className="iconclose"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started2">Início</div>
                </div>
                <img className="iconclose" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div
              className="elementsnavigationlink1"
              onClick={onElementsNavigationLinkContainer1Click}
            >
              <div className="button4" onClick={onButtonContainer2Click}>
                <div className="content3">
                  <img
                    className="iconclose"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started2">Sobre</div>
                </div>
                <img className="iconclose" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div
              className="elementsnavigationlink1"
              onClick={onElementsNavigationLinkContainer2Click}
            >
              <div className="elementsnavigationlink">
                <div className="content3">
                  <img
                    className="iconclose"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started2">Doação</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default Header;
