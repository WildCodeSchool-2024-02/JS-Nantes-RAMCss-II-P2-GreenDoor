import PropTypes from "prop-types";
import heartRed from "../assets/icons/HeartRed.png";
import heartGrey from "../assets/icons/HeartEmptyGray.png";

import { useLikedPlants } from "../contexts/LikedPlantsProvider";

function LikeIcon({ plantId }) {
  const { addToLikedPlants, removeFromLikedPlants, isLiked } = useLikedPlants();

  function handleClick() {
    if (isLiked(plantId)) {
      removeFromLikedPlants(plantId);
    } else {
      addToLikedPlants(plantId);
    }
  }

  return (
    <div>
      <button className="click-like-icon" type="button" onClick={handleClick}>
        {isLiked(plantId) ? (
          <img id="like-red" src={heartRed} alt="favourite plant" />
        ) : (
          <img id="like-empty" src={heartGrey} alt="non-favourite plant" />
        )}
      </button>
    </div>
  );
}

LikeIcon.propTypes = {
  plantId: PropTypes.string.isRequired,
};

export default LikeIcon;
