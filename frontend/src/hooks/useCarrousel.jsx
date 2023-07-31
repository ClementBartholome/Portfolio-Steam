import { useState, useRef, useEffect } from "react";
import { getAllProjects } from "../components/getData";

export default function useCarrousel(images) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);

  const carrouselImageRef = useRef(null);
  const carrouselContainerRef = useRef(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  function imageSize() {
    const carrouselImage = carrouselImageRef.current;

    if (!carrouselImage) {
      return 0;
    }

    return carrouselImage.width;
  }

  function previousImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
    setSelectedThumbnailIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function nextImage() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
    setSelectedThumbnailIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  function handleCarrouselImageClick(index) {
    setIsModalOpen(true);
    setSelectedProject(projects[index]);
  }

  function handleThumbnailClick(index) {
    setCurrentImageIndex(index);
    setSelectedThumbnailIndex(index);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleMouseEnter(index) {
    setHoverIndex(index);
  }

  function handleMouseLeave() {
    setHoverIndex(-1);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen) {
        if (!e.target.closest("[data-modal]")) {
          closeModal();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  function handleTouchStart(e) {
    setTouchStartX(e.touches[0].clientX);
    setTouchMoveX(0);
  }

  function handleTouchMove(e) {
    setTouchMoveX(e.touches[0].clientX - touchStartX);
  }

  function handleTouchEnd() {
    const threshold = 50; // threshold for changing slide
    if (touchMoveX > threshold) {
      previousImage();
    } else if (touchMoveX < -threshold) {
      nextImage();
    }
    setTouchStartX(0);
    setTouchMoveX(0);
  }

  const transformX = -currentImageIndex * imageSize() + touchMoveX;

  return {
    currentImageIndex,
    isModalOpen,
    selectedProject,
    selectedThumbnailIndex,
    hoverIndex,
    touchStartX,
    touchMoveX,
    carrouselImageRef,
    carrouselContainerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    transformX,
    handleMouseEnter,
    handleMouseLeave,
    imageSize,
    previousImage,
    nextImage,
    handleCarrouselImageClick,
    handleThumbnailClick,
    closeModal,
  };
}
