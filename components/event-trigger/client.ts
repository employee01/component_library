import { html, unsafeCSS, nothing } from "lit";
import type { TemplateResult } from "lit";
import { TailwindProvider } from "../../providers/tailwind.js";
import { customElement } from "lit/decorators/custom-element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { Ref, ref, createRef } from "lit/directives/ref.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

type Props = {
  event: string;
  href?: string;
  type: string;
  aria_label?: string;
  class?: string;
  html: string;
  detail?: Record<string, any>;
};

@customElement("event-trigger")
class EventTrigger extends TailwindProvider<Props> {
  private _handleAction(): void {
    if (!this.props.event) {
      throw new Error("Please pass event to trigger");
    }

    const customEvent = new CustomEvent(this.props.event, {
      detail: this.props.detail,
    });

    window.dispatchEvent(customEvent);
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.props) return nothing;

    return html`<button
      class="${this.props.class} block"
      type=${this.props.type}
      @click=${this._handleAction}
      aria-label="${ifDefined(this.props.ariaLabel)}"
      ${ref(this.buttonRef)}
    >
      ${unsafeHTML(this.props.html)}
    </button> `;
  }
}
