import React, { useState, useEffect, useRef } from 'react';
import { ScaleFade, useColorMode } from '@chakra-ui/react';

const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/XD';

  

const Index: React.FC<{}> = (props) => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

  const isDark = colorMode === 'dark';
  const filename = prefix + '/khvt-space.mp3';

  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(filename) : undefined,
  );


  useEffect(()=>{
    if(isOpen) return;

    const loadScript = async () => {
        const url = "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"
        const script = document.createElement('script');
    
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        await sleep(2000)
        setIsOpen(true) 
    }
    
    loadScript()

  }, [isOpen])

  useEffect(() => {
    if(!isOpen) return;

    musicPlayers.current
      ?.pause()

    musicPlayers.current
      ?.play()
      .then(() => {
        console.log('played');
        if (musicPlayers.current instanceof HTMLAudioElement) {
          musicPlayers.current.volume = 0.25;
        } else {
          console.log('No instance', typeof musicPlayers.current);
        }
      })
      .catch(() => {
        console.log('User not interacted with website');
      });
        
    // Animation Timeline
    const animationTimeline = () => {
        // Spit chars that needs to be animated individually
        const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
        const hbd = document.getElementsByClassName("wish-hbd")[0];
    
        textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    
        hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    
        const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
        };
    
        const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
        };
    
        const tl = new TimelineMax();
    
        tl
        .to(".container", 0.1, {
            visibility: "visible"
        })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(
            ".one",
            0.7,
            {
            opacity: 0,
            y: 10
            },
            "+=2.5"
        )
        .to(
            ".two",
            0.7,
            {
            opacity: 0,
            y: 10
            },
            "-=1"
        )
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
            // scale: 0.7
        })
        .to(
            ".three",
            0.7,
            {
            opacity: 0,
            y: 10
            },
            "+=2"
        )
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0
        })
        .staggerTo(
            ".hbd-chatbox span",
            0.5,
            {
            visibility: "visible"
            },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)"
        })
        .to(
            ".four",
            0.5,
            {
            scale: 0.2,
            opacity: 0,
            y: -150
            },
            "+=0.7"
        )
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff"
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
        .from(
            ".idea-5",
            0.7,
            {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0
            },
            "+=0.5"
        )
        .to(
            ".idea-5 .smiley",
            0.7,
            {
            rotation: 90,
            x: 8
            },
            "+=0.4"
        )
        .to(
            ".idea-5",
            0.7,
            {
            scale: 0.2,
            opacity: 0
            },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8,
            {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut
            },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8,
            {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut
            },
            0.2,
            "+=1"
        )
        .staggerFromTo(
            ".baloons img",
            2.5,
            {
            opacity: 0.9,
            y: 1400
            },
            {
            opacity: 1,
            y: -1000
            },
            0.2
        )
        .from(
            ".lydia-dp",
            0.5,
            {
            scale: 1.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45
            },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7,
            {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5)
            },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7,
            {
            scale: 1.4,
            rotationY: 150
            },
            {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut
            },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5,
            {
            opacity: 0,
            y: 10,
            skewX: "-15deg"
            },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5,
            {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4
            },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1"
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
            ".last-smile",
            0.5,
            {
            rotation: 180
            },
            "+=1"
        );
    
        // tl.seek("currentStep");
        // tl.timeScale(2);
    
        // Restart Animation on click
        const replyBtn = document.getElementById("replay");
        replyBtn.addEventListener("click", () => {

            musicPlayers.current
      ?.pause()

    musicPlayers.current
      ?.play()
      .then(() => {
        console.log('played');
        if (musicPlayers.current instanceof HTMLAudioElement) {
          musicPlayers.current.volume = 0.25;
        } else {
          console.log('No instance', typeof musicPlayers.current);
        }
      })
      .catch(() => {
        console.log('User not interacted with website');
      });

        tl.restart();
        });
    };

    animationTimeline()
    
  }, [isOpen]);

  return (
    <>
        
        <div className="container">
            <div className="one">
            <h1 className="one">
                <span data-node-name="greeting">Hey</span>
                <span data-node-name="name">Nisla</span>
            </h1>
            <p className="two" data-node-name="greetingText">I really like your name!</p>
            </div>
            <div className="three">
            <p data-node-name="text1">This 12 August It's your birthday!!! :D</p>
            </div>
            <div className="four">
            <div className="text-box">
                <p className="hbd-chatbox" data-node-name="textInChatBox">Happy birthday to you!! Yeee! Many many happy blah...</p>
                <p className="fake-btn" data-node-name="sendButtonLabel">Send</p>
            </div>
            </div>
            <div className="five">
            <p className="idea-1" data-node-name="text2">That's what I was going to do.</p>
            <p className="idea-2" data-node-name="text3">But then I stopped.</p>
            <p className="idea-3">
                <span data-node-name="text4">I realised, I wanted to do something</span>
                <strong data-node-name="text4Adjective">special</strong>.</p>
            <p className="idea-4" data-node-name="text5Entry">Because,</p>
            <p className="idea-5">
                <span data-node-name="text5Content">You are my special penpal</span>
                <span className="smiley" data-node-name="smiley">😀</span>
            </p>
            <p className="idea-6">
                <span data-node-name="bigTextPart1">S</span>
                <span data-node-name="bigTextPart2">O</span>
            </p>
            </div>
            <div className="six">
            <img src={prefix + "/Nisla2.png"} alt="" className="lydia-dp" data-node-name="imagePath"/>
            <img src={prefix + "/hat.svg"} alt="" className="hat"/>
            <div className="wish">
                <h3 className="wish-hbd" data-node-name="wishHeading">Happy Birthday!</h3>
                <h5 data-node-name="wishText">May the Astrology ('?'), Space always be with you! 😀</h5>
            </div>
            </div>
            <div className="seven">
            <div className="baloons">
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon2.svg"} alt=""/>
                <img src={prefix + "/ballon1.svg"} alt=""/>
                <img src={prefix + "/ballon3.svg"} alt=""/>
            </div>
            </div>
            <div className="eight">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" />
            </svg>
            </div>
            <div className="nine">
            <p data-node-name="outroText">Thanks for teaching me a lot about your culture. XD I hope we will be friends even in another universe.</p>
            <p id="replay" data-node-name="replayText">Click -{'>'}HERE{'<'}-, if you want to watch it again. PROBABLY WILL HAPPEN SOMETHING DIFFERENT IN BACKGROUND (':'v if it is not bug already')</p>
            <p className="last-smile" data-node-name="outroSmiley">{"(◕‿◕) - Danny"}</p>
            </div>
        </div>

        
    </>
  );
};

export default Index;
