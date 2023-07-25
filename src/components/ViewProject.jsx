/* eslint-disable react/prop-types */
export default function ViewProject({ handleCarrouselImageClick, index }) {
  return (
    <button
      className="view-project-button"
      onClick={() => handleCarrouselImageClick(index)}>
      <span className="button-content">Voir le projet </span>
    </button>
  );
}
