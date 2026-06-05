import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("event-trigger")
export class EventTrigger extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log("Event Trigger", this.props);
  }
}
