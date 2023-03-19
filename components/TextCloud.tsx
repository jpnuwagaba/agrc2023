import React from 'react';

const tags = [
  { name: 'GIS Applications', size: 'sm' },
  { name: 'Location-based services', size: 'xs' },
  { name: 'Remote Sensing Applications', size: 'xs' },
  { name: 'Geomatics Professional Standards and Practice', size: 'sm' },
  { name: 'Geomatics Education', size: 'sm' },
  { name: 'Spatial Information Management', size: 'xs' },
  { name: 'Hydrographic Surveying', size: 'sm' },
  { name: 'Positioning & Measurement', size: 'sm' },
  { name: 'Engineering & Mining Surveying', size: 'xs' },
  { name: 'Cadastre & Land Management', size: 'sm' },
  { name: 'History of Surveying & Measurement', size: 'xs' },
  { name: 'Cartography', size: 'sm' },
  { name: 'Integrated Spatial Planning', size: 'xs' },
  { name: 'Photogrammetry & LiDAR Applications', size: 'xs' },
  { name: 'Land Management', size: 'sm' }
];

const TextCloud = () => {
  const minFontSize = 16;
  const maxFontSize = 48;
  const fontSizeRange = maxFontSize - minFontSize;

  const tagElements = tags.map((tag) => {
    const fontSize = minFontSize + ((tag.size === 'lg' ? 3 : tag.size === 'md' ? 2 : 1) / 3) * fontSizeRange;

    const styles = {
      fontSize: `${fontSize}px`,
      color: '#4B5563',
      cursor: 'pointer',
      margin: '0 0.25rem',
    };

    return (
      <span key={tag.name} className="inline-block hover:text-gray-600" style={styles}>
        {tag.name}
      </span>
    );
  });

  return <div className="flex flex-wrap justify-center items-center">{tagElements}</div>;
};

export default TextCloud;
