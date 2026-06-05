import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

interface EventTriggerProps {
  details?: Record<string, any>;
  event: string;
  html: string;
  href: string;
  namespace: string;
  aria_label: string;
  type: string;
  class: string;
}

@customElement("event-trigger")
export class EventTrigger extends TailwindProvider<EventTriggerProps> {
  private _handleClick(event: Event) {
    const { namespace, event } = this.props;
    const eventName = `${namespace}:${event}`;
    const customEvent = new CustomEvent(eventName, {
      detail: this.props.details,
    });
    window.dispatchEvent(customEvent);
  }

  protected render(): TemplateResult {
    return html`<button
      type=${this.props.type}
      class=${this.props.class}
      aria-label=${this.props.aria_label}
      @click=${this._handleClick}
    >
      <slot name="html"></slot>
    </button>`;
  }
}
