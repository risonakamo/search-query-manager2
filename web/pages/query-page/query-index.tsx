import {render} from "solid-js/web";
import { createSignal } from "solid-js";
import {JSXElement} from "solid-js/types";

function QueryIndex():JSXElement
{
  return <>
    hello
  </>;
}

function main()
{
  render(QueryIndex,document.querySelector("main")!);
}

window.onload=main;