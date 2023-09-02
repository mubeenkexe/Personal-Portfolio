import Header from "./components/Header.component";
import ArrowPng from "./assets/imgs/arrow.png"

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-image bg-cover bg-no-repeat">

        <div className="flex flex-col content-center items-center h-screen">

          <div className="w-full h-full overflow-hidden absolute z-0">

            <div className="flex items-center h-full mx-auto">

              <h1 className="font-cube text-5xl whitespace-nowrap animate-moveTextContent-1 text-white -z-10 font-normal">
                mubeen rehman mubeen rehman
              </h1>
              <h1 className="font-cube text-5xl whitespace-nowrap animate-moveTextContent-2 text-white -z-10 font-normal">
                mubeen rehman mubeen rehman
              </h1>

            </div>

          </div>

          <div className="m-auto relative">

            <h2 className="absolute translate-y-7 font-ibmplex font-bold text-lg text-white">Meet</h2>
            <h1 className="font-blackout text-12xl font-normal">mUbeeN</h1>
            <h2 className="absolute -translate-y-14 font-ibmplex font-bold text-lg text-white">Professional Graphic Designer and Developer</h2>

          </div>

          <div className="w-fit h-full absolute flex flex-col items-center ">

            <p className="text-center text-xm w-4/5 m-auto text-white font-normal translate-y-44">
              Hey there! I'm Mubeen K., a dedicated Graphic Designer and Web Developer on a mission to bring imagination to life. Whether it's crafting visually stunning logos or creating user-friendly websites, I merge artistic creativity with technical expertise to leave a lasting impact. With a passion for React, HTML, CSS, and JavaScript, I'm all about pushing the boundaries of design and functionality. Beyond coding, you'll find me immersed in Adobe XD, Illustrator, Photoshop, and Premiere Pro, weaving a blend of aesthetics and innovation. Curious to know more? Let's dive into my world of creativity!
            </p>

            <a href="aboutme" className="flex items-center border border-black text-black -translate-y-20">
              <span className="px-3">About Me</span>
              <div className="w-auto bg-black flex items-center justify-center">

                <img
                  src={ArrowPng}
                  alt="Arrow"
                  className="w-8"
                />

              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;