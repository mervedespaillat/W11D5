import { useState } from "react";



const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const [activeRating, setActiveRating]  = useState(rating)

    const maxRating = 5;

    const renderPawIcons = () => {
      // const filled = rating > 0 ? Math.floor(rating) : 0;
      const emptyPaws = maxRating - activeRating;

      const pawIcons = [];

      for (let i =0; i < activeRating; i++) {
        pawIcons.push(
          <div className="filled" key={`filled-paw-${i}`} onMouseEnter={()=> handleMouseEnter(i +  1 )} onMouseLeave={handleMouseLeave}>
            <i  className="fa fa-paw"/>
          </div>
        );
      }

      for (let i =0; i < emptyPaws; i++) {
        pawIcons.push(
          <div className="empty" key={`empty-paw-${i}`} onMouseEnter={()=> handleMouseEnter(rating + i +  1 )} onMouseLeave={handleMouseLeave}>
            <i className="fa fa-paw"/>
          </div>
        );
      }
      return pawIcons;
    }

    const handleMouseEnter = (rating) => {
      setActiveRating(rating)
    }

    const handleMouseLeave = () => {
      setActiveRating(0)
    }
  

  return (
<>
<input
  type="number" 
  disabled={disabled}
  value={rating}
  onChange={onChange}
/>
    <div className="rating-input">
      {renderPawIcons()}
    </div>
</>
  );
};

export default PawsRatingInput;