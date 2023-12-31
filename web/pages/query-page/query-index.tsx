import {render} from "solid-js/web";
import { createSignal } from "solid-js";
import {JSXElement} from "solid-js/types";

import { FlatButton } from "components/flat-button/flat-button";

import "./query-index.less";

function QueryIndex():JSXElement
{
  return <>
    <div class="contain">
      <section class="menu-zone">
        <div class="query-search-bar">
          <input type="text" class="search-bar"/>
          <div class="search-button">Search</div>
        </div>
        <div class="tool-bar-zone">
          <FlatButton/>
        </div>
      </section>

      <section class="items-zone">
        <div class="query-items-table">
          <div class="row header">
            <div class="item-id">#</div>
            <div class="item-slug">Item</div>
            <div class="view-count">View Count</div>
            <div class="item-count">Items Count</div>
          </div>

          <div class="row">
            <div class="item-id">1</div>
            <div class="item-slug">1541049: 2023/09/09</div>
            <div class="view-count">0</div>
            <div class="item-count">0</div>
          </div>

          <div class="row">
            <div class="item-id">2</div>
            <div class="item-slug">1541049: 2023/09/08</div>
            <div class="view-count">0</div>
            <div class="item-count">0</div>
          </div>
        </div>
      </section>
    </div>
  </>;
}

function main()
{
  render(QueryIndex,document.querySelector("main")!);
}

window.onload=main;