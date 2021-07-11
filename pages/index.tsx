import React, { useEffect } from "react";
import Galaxy from "../components/3D/Galaxy";
import Presentation from "../components/profile/Presentation";
import Profile from "../components/profile/Profile";
import Social from "../components/profile/Social";
import { Locale } from "../models/CustomTypes";
import Particles from "react-particles-js";
import { useColorMode } from "@chakra-ui/react";

/*
export async function getStaticProps({ locale }: Locale){
  let greeting = locale === "en"? "Hi, i am Danny 🙋‍♂️": "Hola";
  console.log(locale)
  return {
    props: {
      greeting
    }
  };
}
*/

const Index: React.FC<{}> = (props) => {
  
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Particles
        width="100%"
        height="100%"
        className="particles-container"
        canvasClassName="particles"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: isDark? "#ffffff": "#4aa89f",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Presentation greeting="Hi, i am Danny 🙋‍♂️" />

      <Profile />
    </React.Fragment>
  );
};

export default Index;
