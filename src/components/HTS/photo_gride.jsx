import React, { useState } from 'react';

const PhotoGrid = ({ hotels }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(10); // Set the initial number of visible thumbnails
  const [showMore, setShowMore] = useState(true);

  const handlePhotoClick = (index) => {
    setSelectedPhoto(index);
  };

  const handleShowMore = () => {
    setVisibleThumbnails(visibleThumbnails + 10); // Increase the number of visible thumbnails by 10
    if (visibleThumbnails + 10 >= hotels.length) {
      setShowMore(false); // Hide "Show More" button when all thumbnails are visible
    }
  };

  return (
    <div className="photo-grid-container">
      <div className="main-photo">
        <img src={hotels[selectedPhoto]?.image || 'default-image-url'} alt={`Main Photo`} />
      </div>
      <div className="thumbnail-grid">
        {hotels.slice(0, visibleThumbnails).map((hotel, index) => (
          <div
            key={index}
            className={`thumbnail-item ${selectedPhoto === index ? 'selected' : ''}`}
            onClick={() => handlePhotoClick(index)}
          >
            <img src={hotel.image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
        {showMore && hotels.length > visibleThumbnails && (
          <div className="show-more-container">
            <button className="show-more-button" onClick={handleShowMore}>
              Show More ({hotels.length - visibleThumbnails} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGrid;
