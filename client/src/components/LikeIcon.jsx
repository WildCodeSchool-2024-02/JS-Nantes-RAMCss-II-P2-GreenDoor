import PropTypes from "prop-types";

function LikeIcon({ likeIcon, setLikeIcon }) {
  return (
    <div>
      <button
        className="click-like-icon"
        type="button"
        onClick={() => setLikeIcon(() => !likeIcon)}
      >
        {likeIcon ? (
          <img
            id="like-red"
            src="./src/assets/icons/HeartRed.png"
            alt={likeIcon}
          />
        ) : (
          <img
            id="like-empty"
            src="./src/assets/icons/HeartEmpty.png"
            alt={likeIcon}
          />
        )}
      </button>
    </div>
  );
}

LikeIcon.propTypes = {
  likeIcon: PropTypes.bool.isRequired,
  setLikeIcon: PropTypes.bool.isRequired,
};

export default LikeIcon;
