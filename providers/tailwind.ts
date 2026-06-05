import css from "../assets/global.css?inline";

import { LitElement, unsafeCSS } from "lit";

export class TailwindProvider<TProps = {}> extends LitElement {
  static styles = [unsafeCSS(css)];

  private _props!: TProps;
  
  set props(value: TProps) {
    const oldValue = this._props;
    this._props = value;
    this.requestUpdate("props", oldValue);
  }

  get props(): TProps {
    return this._props;
  }
}