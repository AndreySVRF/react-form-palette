import React, { useState, useEffect, useRef } from 'react';
import { BlockPicker } from 'react-color';

import { useDispatch, useSelector } from 'react-redux';
import { updateColor, deleteColor } from '../../actions/palette';

import './PaletteItem.scss';

import closeIconWhite from '../../assets/images/close-icon-white.svg';
import closeIconBlack from '../../assets/images/close-icon-black.svg';

const PaletteItem = (props) => {
  const [color, setColor] = useState(props.color.hex);
  const [isVisibleCP, setVisibleCP] = useState(props.visiblePicker);
  const refItem = useRef();
  const colorId = props.color.id;

  const dispatch = useDispatch();
  const { lightTheme } = useSelector(state => state.theme);

  const [theme, setTheme] = useState(closeIconWhite);

  useEffect(() => {
    if (lightTheme) {
      setTheme(closeIconBlack);
    } else {
      setTheme(closeIconWhite);
    }
  }, [lightTheme]);

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
    dispatch(updateColor({ id: colorId, hex: color }, props.position));
  }, [color, colorId, props.position, dispatch]);

  const onDeleteColor = (e) => {
    e.stopPropagation();
    dispatch(deleteColor(props.position));
  };

  return (
    <div className="palette__item" ref={refItem}>
      <div className="palette__item-color" onClick={() => setVisibleCP(!isVisibleCP)} style={{ background: color }}>
        <div className="palette__item-delete" onClick={(e) => onDeleteColor(e)}>
          <img src={theme} alt="close"/>
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
