import React, { useState, useEffect, useRef } from 'react';
import { BlockPicker } from 'react-color';

import './PaletteItem.scss';

import closeIcon from '../../assets/images/close-icon.svg';
import { useDispatch } from 'react-redux';
import { updateColor } from '../../actions/palette';

const PaletteItem = (props) => {
  const [color, setColor] = useState(props.color.hex);
  const [isVisibleCP, setVisibleCP] = useState(props.visiblePicker);
  const refItem = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const handler = e => {
      if (!refItem.current.contains(e.target)) {
        setVisibleCP(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    dispatch(updateColor({ id: props.color.id, hex: color }, props.position));
  }, [color]);

  const deleteColor = (e) => {
    e.stopPropagation();
    console.log('delete');
  };

  return (
    <div className="palette__item" ref={refItem}>
      <div className="palette__item-color" onClick={() => setVisibleCP(!isVisibleCP)} style={{ background: color }}>
        <div className="palette__item-delete" onClick={(e) => deleteColor(e)}>
          <img src={closeIcon} alt="close"/>
        </div>
      </div>
      {isVisibleCP ? <BlockPicker
        color={color}
        onChangeComplete={e => setColor(e.hex)}
      /> : ''}
    </div>
  );
};

export default PaletteItem;
