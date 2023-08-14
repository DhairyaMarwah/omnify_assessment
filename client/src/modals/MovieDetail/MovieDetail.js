import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "100vh", opacity: 0 },
  visible: {
    y: "100px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};
const MovieDetail = ({ showModal, setShowModal, detail }) => {
  console.log(detail);
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal} className="detail-modal">
            <div className="modal-container">
              <div onClick={() => setShowModal(false)} className="close-button">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="movie-details">
                <div className="movie-details-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}
                    alt=""
                  />
                  <div className="img-layer"></div>
                </div>
                <div className="movie-details-content">
                  <div className="flex">
                    <div className="movie-name">{detail.title}</div>
                    <div className="movie-date">
                      {detail.release_date.split("-")[0]}
                    </div>
                  </div>
                  <div className="movie-desc">
                    <p>{detail.overview}</p>
                  </div>
                </div>
              </div>
              <div className="recommended">
                <div className="header-text">More Like this 🍿</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieDetail;
