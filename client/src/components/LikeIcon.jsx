import PropTypes from "prop-types";
import heartRed from "../assets/icons/HeartRed.png";
import heartGrey from "../assets/icons/HeartEmptyGray.png";

function LikeIcon({ likeIcon, setLikeIcon }) {
  return (
    <div>
      <button
        className="click-like-icon"
        type="button"
        onClick={() => setLikeIcon(() => !likeIcon)}
      >
        {likeIcon ? (
          <img id="like-red" src={heartRed} alt={likeIcon} />
        ) : (
          <img id="like-empty" src={heartGrey} alt={likeIcon} />
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
