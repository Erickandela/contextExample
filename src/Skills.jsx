import React, {useContext} from 'react';
import {FormContext} from './Form';

export default (props) => {

  const context = useContext(FormContext);
  return(
    <div>
    <p> Email: {context.email} </p>
    <label>
    <input type="checkbox" name="likes[]"/>
    Ruby
    </label>
    <label>
    <input type="checkbox" name="likes[]"/>
    JavaScript
    </label>
    </div>
  )
}
