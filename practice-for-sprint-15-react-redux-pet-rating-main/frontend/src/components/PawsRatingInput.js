import { useState } from "react";


const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const [activeRating, setActiveRating]  = useState(rating)

  const maxRating = 5;

  const handleMouseLeave = () => {
    if (!disabled) setActiveRating(rating);
  }

  const handleMouseEnter = (ratingNum) => {
    if (!disabled) setActiveRating(ratingNum);
  }

  const classRecognizer = (value) => {
    if (activeRating >= value) {
      return 'filled';
    } else {
      return 'empty';
    }
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
      <div className={classRecognizer(1)} 
           onMouseEnter={()=> handleMouseEnter(1)} 
           onMouseLeave={handleMouseLeave}
           onClick={() => onChange(1)}
           >
          <i className="fa fa-paw"/>
      </div>

      <div className={classRecognizer(2)} 
           onMouseEnter={()=> handleMouseEnter(2)} 
           onMouseLeave={handleMouseLeave}
           onClick={() => onChange(2)}
           >
          <i className="fa fa-paw"/>
      </div>

      <div className={classRecognizer(3)}
           onMouseEnter={()=> handleMouseEnter(3)}
           onMouseLeave={handleMouseLeave}
           onClick={() => onChange(3)}
           >
          <i className="fa fa-paw"/>
      </div>

      <div className={classRecognizer(4)}
           onMouseEnter={()=> handleMouseEnter(4)}
           onMouseLeave={handleMouseLeave}
           onClick={() => onChange(4)}
           >
          <i className="fa fa-paw"/>
      </div>

      <div className={classRecognizer(5)}
           onMouseEnter={()=> handleMouseEnter(5)}
           onMouseLeave={handleMouseLeave}
           onClick={() => onChange(5)}
           >
          <i className="fa fa-paw"/>
      </div>
    </div>
  </>
  );
};

export default PawsRatingInput;