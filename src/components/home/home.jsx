import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function Home() {

  const [move, setMove] = React.useState(false)
  const [[index,direction],setIndex]=React.useState([0,0])
  const loremipsum=[
    "Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.",
    "In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu.",
    "Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.Proin sit amet lacus mollis, semper massa ut, rutrum mi.",
    "Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiatsem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehiculametus ac, interdum nibh. Curabitur vitae convallis ligula. Integer acenim vel felis pharetra laoreet. Interdum et malesuada fames ac anteipsum primis in faucibus. Pellentesque hendrerit ac augue quispretium.",
    "Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et exultricies, mollis mi in, euismod dolor."
  ]
  const paginate=(newDirection)=>{
    setIndex([index+newDirection,newDirection])
  }

  const variants = {
    enter: (direction) => {
      return {
        y: direction > 0 ? 300 : -300,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 300 : -300,
        opacity: 0
      };
    }
  };

  return (
    <div className="w-full bg-black h-screen text-blue-50 text-3xl flex flex-col justify-center items-center p-[5%]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
        key={index}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition={{
          y: { type: "tween" },
          opacity: { duration: 0.2 }
        }}
        onClick={()=>{
          setMove(!move)
        }}>
          {loremipsum[index]}
      </motion.div>
    </AnimatePresence>
    <div className="next" onClick={() => paginate(1)}>
        {"‣"}
    </div>
    <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
    </div>
  </div>
  )
}
