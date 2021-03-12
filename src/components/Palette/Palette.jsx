import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PaletteItem from '../PaletteItem/PaletteItem';

import { addColor } from '../../actions/palette';

import './Palette.scss';

const Palette = () => {
  const [paletteColors, setPaletteColors] = useState([]);
  const [newColor, setNewColor] = useState(false);

  const dispatch = useDispatch();
  const { colors } = useSelector(state => state.palette);

  useEffect(() => {
    setPaletteColors(colors);
  }, [colors]);

  const onAddColor = () => {
    dispatch(addColor({ id: randomId(1000000), hex: '#37D67A' }));
    setNewColor(true);
  };

  return (
    <div className="palette">
      {paletteColors &&
        paletteColors.map((color, index) => (
          <PaletteItem
            key={color.id}
            color={color}
            position={index}
            visiblePicker={newColor}/>
        ))
      }

      <div className="block-control">
        <button className="btn" onClick={() => onAddColor()}>Добавить цвет</button>
      </div>
    </div>
  );
};

export default Palette;

function randomId(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
