import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { SimpleSection } from "../../../components/projects/SimpleSection";
import useMediaQueryFixed from "../../../hooks/use-media-query";

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || "") +
  "/images/projects/RecommendationSystemMatrix";

const RecommendationSystemMatrix = () => {
  const isSmallerScreen = useMediaQueryFixed("(max-width:600px)");

  const cssFullImage = {
    maxWidth: "100%",
  };
  const cssBoxImage = {
    w: "15rem",
    h: "15rem",
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="90vw"
      maxWidth="90vw"
    >
      <Heading m="2rem" className="responsive_text">
        Recommendations System with Collaborative Filtering
      </Heading>

      <SimpleSection
        text="Muchas empresas no poseen un sistema de recomendación sobre sus productos ya sea por falta de conocimiento de estos sistemas o falta de dinero. Y dado que entre el 40% y 60% (según Google) de consumo de contenido de las grandes empresas viene de recomendaciones, existe la necesidad de crear una forma económica y reutilizable de realizar recomendaciones grupales y personalizadas de alta calidad con el fin de que las empresas incrementen sus ganancias al detectar similitudes entre los gustos de los clientes de forma colaborativa. Se desarrollará un sistema recomendador con componentes reutilizables y parametrizables para que las empresas pequeñas o medianas puedan utilizarlo a bajo costo con poco desarrollo por parte de los programadores de dicha empresa."
        customCSS={cssBoxImage}
        srcImage={prefix + "/0.png"}
      />

      <Box m="1rem" bg="red" width="90vw" maxWidth="100vw">
        <iframe
          width="100%"
          height={isSmallerScreen ? "auto" : "400px"}
          src="https://web.microsoftstream.com/embed/video/e6e53014-6335-4a98-a076-e79ab6bc5916?autoplay=false&showinfo=true"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </Box>

      <SimpleSection
        text="Se diseñó un diagrama de las etapas a recorrerse para recomendar un producto. Se parte con una gran cantidad de productos y se los va filtrando poco a poco: se van generando posibles candidatos con la factorización de matrices y luego se calcula similaridades entre los productos para luego tomar al top 10 de productos la mejor puntuación"
        customCSS={cssFullImage}
        srcImage={prefix + "/1.png"}
      />

      <SimpleSection
        text="La idea detrás de la factorización de matrices es que se quiere predecir la tabla de puntuación de todos los usuarios, inclusive los valores que todavía no hay calificado. Esto se logra multiplicando una matriz A por una matriz B, cada una con parámetros. Esta multiplicación tendrá un error por lo que con un optimizador se van reajustando los valores de ambas matrices hasta que el error sea muy bajo y por lo tanto el sistema sea capaz de predecir valores que aún no existen."
        customCSS={cssFullImage}
        srcImage={prefix + "/2.png"}
      />

      <SimpleSection
        text="Utilizando Python y Flask se diseñó una pequeña tienda de productos"
        customCSS={cssFullImage}
        srcImage={prefix + "/3.png"}
      />

      <SimpleSection
        text="Todos estos productos pueden ser calificados del 1 al 5"
        customCSS={cssFullImage}
        srcImage={prefix + "/4.png"}
      />

      <SimpleSection
        text="Los usuarios calificarán algunos productos y otros no. De forma colaborativa si una persona A le gusta algunos productos que una persona B, entonces si B le gusta un nuevo producto hay una probabilidad de que ese producto también le guste a A. La factorización de matrices realiza este proceso generando algunos candidatos, se usa también el contexto e historial reciente de búsqueda de la persona A para balancear las puntuaciones, en la fase de re scoring se determina productos que el cliente A ya conoce y por lo tanto se los descarta. La idea es siempre dar recomendaciones frescas."
        customCSS={cssFullImage}
        srcImage={prefix + "/5.png"}
      />

      <SimpleSection
        text="Nota: para este proyecto también se realizó un panel de administración"
        customCSS={cssFullImage}
        srcImage={prefix + "/6.png"}
      />
    </Flex>
  );
};

export default RecommendationSystemMatrix;
