import React from 'react';


const ImageLinkForm = ({ onInputChange, onButtonSubmit , val }) => {
  return (
    <div>

      <div className='center '>
        <div className='form center pa4 br3 shadow-3 bg-light-red'>
          <input className='f2 pa2 w-70 center' type='tex' onChange={onInputChange} value = {val}  />
          <button
            className='w-30 grow f2 link ph3 pv2 dib white bg-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;