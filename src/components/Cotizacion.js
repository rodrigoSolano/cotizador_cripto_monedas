import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  margin-top: 49px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.div`
  line-height: 49px;
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;

const Precio = styled.div`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

function Cotizacion({ resultado }) {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Info>
        Precio más alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio más bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variación últimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última actualización: <span>{resultado.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
}

export default Cotizacion;
