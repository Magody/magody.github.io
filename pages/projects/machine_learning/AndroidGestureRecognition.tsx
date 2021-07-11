import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SimpleSection } from "../../../components/projects/SimpleSection";
import useMediaQueryFixed from "../../../hooks/use-media-query";

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || "") +
  "/images/projects/AndroidGestureRecognition";

const AndroidGestureRecognition: React.FC<{ basePathImageDir: string }> = (
  props
) => {
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
        Gesture recognition using android
      </Heading>

      <SimpleSection
        text="El proyecto consiste en reconocer gestos hechos con el celular, utilizando
        el acelerómetro y giroscopio del teléfono para predecir un tipo personalizado de movimiento que se lo entrenó anteriormente y enviar dicha predicción a un servidor que dibujará en pantalla símbolos según el gesto predicho por la red.
        Este es un pequeño avance para en un futuro poder guardar cualquier tipo de gesto y utilizar el celular como un mando de realidad aumentada en aplicaciones o videojuegos en la web."
        customCSS={cssBoxImage}
        srcImage={prefix + "/0.png"}
      />

      <Box m="1rem" bg="red" width="90vw" maxWidth="100vw">
        <iframe
          width="100%"
          height={isSmallerScreen ? "auto" : "400px"}
          src="https://web.microsoftstream.com/embed/video/a2b94768-ca42-4826-a04d-c2cf1d594bea?autoplay=false&showinfo=true"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </Box>

      <SimpleSection
        text="Mediante el movimiento de la mano con el celular los sensores recolectan
        datos, y estos datos serán usandos para entrenar a una red neuronal
        feedforward."
        customCSS={cssFullImage}
        srcImage={prefix + "/1.png"}
      />

      <SimpleSection
        text="El sistema posee un CRUD de operaciones para la gestión de los gestos y
        otra información útil de los usuarios. Para el entrenamiento es
        necesario guardar almenos 10 repeticiones por cada gesto, a partir de
        esos ejemplos se generan otros 200 utilizando Data augmentation. Es
        decir, se aplica varias operaciones matemáticas a los datos de modo qu
        se generen nuevos datos pero que no pierdan la esencia principal."
        customCSS={cssFullImage}
        srcImage={prefix + "/2.png"}
      />

      <SimpleSection
        text="El sistema también cuenta con un panel de administración de los datos,
        esto fue hecho con Angular."
        customCSS={cssFullImage}
        srcImage={prefix + "/3.png"}
      />

      <SimpleSection
        text="La red neuronal recibe una entrada de 600 variables: 1
        00 datos por cada eje y por cada tipo de sensor 
        (Giroscopio y Acelerómetro) con esta entrada busca predeir 
        la clase del gesto. La aplicación se conecta a un servidor y 
        le comunica su predicción, el servidor entonces dibuja en la 
        pantalla una flecha si fue un movimiento lateral o una cruz si 
        fue un movimiento como disparo. Estos fueron los dos tipos de gestos
         principales con los que se entrenó a la red."
        customCSS={cssFullImage}
        srcImage={prefix + "/4.png"}
      />

      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + "/5.png"}
      />

      <Text className="responsive_text">
        Para el entrenamiento se utilizaron pocas épocas y una tasa de
        aprendizaje de 0.01 con 600 neuronas de entrada, 35 en una capa oculta,
        18 en una segunda capa oculta y N neuronas en la capa de salida. N
        depende de la cantidad de gestos que haya guardado el usuario. Como
        conclusión se obtuvo un porcentaje de acierto del 80%. La red neuronal
        no pudo reconocer bien los tipos de gestos cuando se utilizaba el
        dispositivo en modo streaming (en vivo) pero en predicciones estáticas
        en donde solo se guardaba el gesto y posteriormente se mandaba a
        predecir, la red predecía correctamente. Para el manejo de señales lo
        mejor será utilizar redes convolucionales o redes neuronales recurrentes
        para lograr una mayor puntuación de precisión.
      </Text>
    </Flex>
  );
};

export default AndroidGestureRecognition;
