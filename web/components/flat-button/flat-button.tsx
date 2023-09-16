import {JSXElement} from "solid-js/types";
import {Switch} from "solid-js";

import "./flat-button.less";

export interface ComponentNameProps
{

}

export function FlatButton(props:ComponentNameProps):JSXElement
{
  return <div class="flat-button">
    <p class="text">Shuffle</p>
    {/* <p class="icon">X</p> */}
    <p class="toggles">
      <p>item1</p>
      <p>item2</p>
    </p>
  </div>;
}