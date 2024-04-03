import React from 'react';

interface BadgeProps {
  badgeType: string;
  imagePath: string;
}

const BadgeDisplay: React.FC<BadgeProps> = ({ badgeType, imagePath }) => {
  return (
    <div className="badge-display">
      <img src={imagePath} alt={badgeType} />
      <p>{badgeType}</p>
    </div>
  );
};

export default BadgeDisplay;
