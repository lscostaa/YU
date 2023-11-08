import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Sobre.css";

const Sobre = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/download");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/download");
  }, [navigate]);

  const onElementsNavigationLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onElementsNavigationLinkContainer2Click = useCallback(() => {
    navigate("/doao");
  }, [navigate]);

  return (
    <div className="sobre">
      <div className="content11">
        <img
          className="image-placeholder-icon1"
          alt=""
          src="/image-placeholder1.svg"
        />
        <div className="footer2">
          <div className="nayzak2">© 2023 Waave</div>
        </div>
        <div className="content12">
          <div className="content13">
            <div className="text2">
              <div className="header3">
                <div className="badge2">
                  <div className="content14">
                    <img className="iconclose4" alt="" src="/iconclose.svg" />
                    <div className="indicator2" />
                    <div className="hello2">SALE</div>
                    <img className="iconclose4" alt="" src="/iconclose.svg" />
                  </div>
                </div>
                <div className="powered-by-ai2">Powered by AI</div>
                <div className="descubra-o-potencial">
                  Descubra o potencial do Waave
                </div>
              </div>
              <div className="waave-uma">
                Waave é uma IA que ficará rodando em segundo plano no seu
                computador com a finalidade de executar ações através de gestos.
              </div>
            </div>
            <div className="text3">
              <div className="header3">
                <div className="badge3">
                  <div className="content14">
                    <img className="iconclose4" alt="" src="/iconclose.svg" />
                    <div className="indicator2" />
                    <div className="hello2">SALE</div>
                    <img className="iconclose4" alt="" src="/iconclose.svg" />
                  </div>
                </div>
                <div className="conhea-nossa-equipe">Conheça nossa equipe</div>
              </div>
              <div className="somos-um-grupo-container">
                <p className="somos-um-grupo">
                  Somos um grupo de 6 alunos do ensino médio com o objetivo
                </p>
                <p className="somos-um-grupo">
                  de desenvolver essa IA para facilitar a navegação de telas
                </p>
              </div>
            </div>
            <div className="button7" onClick={onButtonContainerClick}>
              <img
                className="iconarrow-right11"
                alt=""
                src="/iconarrowright.svg"
              />
              <div className="get-started7">Download</div>
              <img
                className="iconarrow-right11"
                alt=""
                src="/iconarrowright.svg"
              />
            </div>
          </div>
        </div>
        <div className="content16">
          <div className="branding1">
            <div className="waave2">Waave</div>
          </div>
          <div className="buttons1">
            <div className="button8">
              <div className="content17">
                <img className="iconclose4" alt="" src="/iconarrowright1.svg" />
              </div>
              <img className="iconclose4" alt="" src="/iconarrowright1.svg" />
            </div>
            <div className="button9" onClick={onButtonContainer2Click}>
              <img className="iconclose4" alt="" src="/iconarrowright1.svg" />
              <div className="get-started8">Download</div>
              <img className="iconclose4" alt="" src="/iconarrowright1.svg" />
            </div>
          </div>
          <div className="elementsnavigationlink-group1">
            <div
              className="elementsnavigationlink3"
              onClick={onElementsNavigationLinkContainerClick}
            >
              <div className="button8">
                <div className="content14">
                  <img
                    className="iconclose4"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started8">Início</div>
                </div>
                <img className="iconclose4" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div className="content17">
              <div className="button8">
                <div className="content14">
                  <img
                    className="iconclose4"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started8">Sobre</div>
                </div>
                <img className="iconclose4" alt="" src="/iconchevrondown.svg" />
              </div>
            </div>
            <div
              className="elementsnavigationlink3"
              onClick={onElementsNavigationLinkContainer2Click}
            >
              <div className="content17">
                <div className="content14">
                  <img
                    className="iconclose4"
                    alt=""
                    src="/iconarrowright1.svg"
                  />
                  <div className="get-started8">Doação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
