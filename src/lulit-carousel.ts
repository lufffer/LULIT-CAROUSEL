import { LitElement, html } from "lit";
import { customElement, query, queryAll, property } from "lit/decorators.js";
import styles from "./styles";

@customElement("lulit-carousel")
class LuLitCarousel extends LitElement {
  static styles = styles;

  @query("slot[name=selected]", true) private selected!: HTMLSlotElement;
  @query("slot[name=prev]", true) private prev!: HTMLSlotElement;
  @query("slot[name=next]", true) private next!: HTMLSlotElement;
  @query(".container", true) private container!: HTMLDivElement;
  @query(".left-chevron", true) private leftChevron!: HTMLButtonElement;
  @query(".right-chevron", true) private rightChevron!: HTMLButtonElement;

  @queryAll(".indicator") private indicators!: NodeListOf<HTMLButtonElement>;

  @property({ type: Boolean, reflect: false }) ride = false;
  @property({ type: Number, reflect: false }) time = 5000;
  @property({ type: String, reflect: false }) dir = "right";
  @property({ type: String, reflect: false }) duration = "0.5";

  private selectedIndicator: number;
  private touchStartX = 0;
  private touchEndX = 0;
  private touchMoveX = 0;
  private touchStartY = 0;
  private touchEndY = 0;
  private touchMoveY = 0;
  private maxSelected = this.childElementCount - 1;

  private activeTransition = (move: string) => {
    if (move === "move-left") {
      this.container.classList.add("left");
    }

    setTimeout(() => {
      this.container.style.setProperty(
        "transition",
        `all ${this.duration}s linear`
      );
      this.container.classList.add(move);
    }, 100);
  };

  private changeIndicator = (oldIndicator: number, newIndicator: number) => {
    this.indicators[newIndicator].classList.add("selected");
    this.indicators[oldIndicator].classList.remove("selected");
    this.selectedIndicator = newIndicator;
  };

  private handleTransition = (): void => {
    this.container.removeEventListener("transitionend", this.handleTransition);
    this.container.style.removeProperty("transition");

    this.selected.assignedElements()[0].removeAttribute("slot");
    if (this.container.classList.contains("move-right")) {
      this.container.classList.remove("move-right");
      this.next.assignedElements()[0].setAttribute("slot", "selected");
    } else {
      this.container.classList.remove("left");
      this.container.classList.remove("move-left");
      this.prev.assignedElements()[0].setAttribute("slot", "selected");
    }

    Array.from(this.indicators).map((indicator: HTMLButtonElement) =>
      indicator.removeAttribute("disabled")
    );
    this.leftChevron.removeAttribute("disabled");
    this.rightChevron.removeAttribute("disabled");
    this.selected.addEventListener("touchstart", this.handleTouchStart);
    this.selected.addEventListener("touchend", this.handleTouchEnd);
  };

  private moveLeft = () => {
    if (this.selected.assignedElements()[0].previousElementSibling === null) {
      this.children[this.maxSelected].setAttribute("slot", "prev");
      this.changeIndicator(0, this.maxSelected);
    } else {
      this.selected
        .assignedElements()[0]
        .previousElementSibling.setAttribute("slot", "prev");
      this.changeIndicator(this.selectedIndicator, this.selectedIndicator - 1);
    }

    this.activeTransition("move-left");
    this.container.addEventListener("transitionend", this.handleTransition);
  };

  private moveRight = () => {
    if (this.selected.assignedElements()[0].nextElementSibling === null) {
      this.children[0].setAttribute("slot", "next");
      this.changeIndicator(this.maxSelected, 0);
    } else {
      this.selected
        .assignedElements()[0]
        .nextElementSibling.setAttribute("slot", "next");
      this.changeIndicator(this.selectedIndicator, this.selectedIndicator + 1);
    }

    this.activeTransition("move-right");
    this.container.addEventListener("transitionend", this.handleTransition);
  };

  private handleMove = (e: MouseEvent | undefined): void => {
    this.leftChevron.setAttribute("disabled", "true");
    this.rightChevron.setAttribute("disabled", "true");
    this.selected.removeEventListener("touchstart", this.handleTouchStart);
    this.selected.removeEventListener("touchend", this.handleTouchEnd);

    let action: string;
    if (e === undefined) {
      if (this.touchMoveX > 0) {
        action = "left-chevron";
      } else if (this.touchMoveX < 0) {
        action = "right-chevron";
      } else {
        action = this.dir === "right" ? "right-chevron" : "left-chevron";
      }
    } else {
      action = (e.currentTarget as HTMLElement).id;
    }
    this.touchMoveX = 0;
    this.touchMoveY = 0;

    switch (action) {
      case "left-chevron":
        this.moveLeft();
        break;
      case "right-chevron":
        this.moveRight();
        break;
      default:
        if (
          !(e.currentTarget as HTMLButtonElement).classList.contains("selected")
        ) {
          Array.from(this.indicators).map((indicator: HTMLButtonElement) =>
            indicator.setAttribute("disabled", "true")
          );
          if (
            (e.currentTarget as HTMLButtonElement).dataset.indicator >
            this.selectedIndicator.toString()
          ) {
            this.children[
              (e.currentTarget as HTMLButtonElement).dataset.indicator
            ].setAttribute("slot", "next");
            this.activeTransition("move-right");
          } else {
            this.children[
              (e.currentTarget as HTMLButtonElement).dataset.indicator
            ].setAttribute("slot", "prev");
            this.activeTransition("move-left");
          }
          (e.currentTarget as HTMLButtonElement).classList.add("selected");
          this.changeIndicator(
            this.selectedIndicator,
            Number((e.currentTarget as HTMLButtonElement).dataset.indicator)
          );

          this.container.addEventListener(
            "transitionend",
            this.handleTransition
          );
        }
        break;
    }
  };

  protected handleTouchStart = (e: TouchEvent): void => {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  };

  protected handleTouchEnd = (e: TouchEvent): void => {
    this.touchEndX = e.changedTouches[0].clientX;
    this.touchEndY = e.changedTouches[0].clientY;
    this.touchMoveX = this.touchEndX - this.touchStartX;
    this.touchMoveY = this.touchEndY - this.touchStartY;

    if (Math.abs(this.touchMoveX) > Math.abs(this.touchMoveY)) {
      this.handleMove(undefined);
    }
  };

  protected firstUpdated(): void {
    this.children[0].setAttribute("slot", "selected");
    this.indicators[0].classList.add("selected");
    this.selectedIndicator = 0;
    this.selected.addEventListener("touchstart", this.handleTouchStart);
    this.selected.addEventListener("touchend", this.handleTouchEnd);
    if (this.ride) {
      setInterval(() => this.handleMove(undefined), this.time || 5000);
    }
  }

  render() {
    const indicators = [];

    for (let i = 0; i <= this.maxSelected; ++i) {
      indicators.push(
        html`<button
          class="indicator"
          data-indicator=${i}
          @click=${this.handleMove}
        ></button>`
      );
    }

    return html`
      <div class="container"">
        <slot name="prev"></slot>
        <slot name="selected"></slot>
        <slot name="next"></slot>
      </div>
      <button class="left-chevron" id="left-chevron" @click=${this.handleMove}>
        <img src="./imgs/left-chevron.svg" />
      </button>
      <button
        class="right-chevron"
        id="right-chevron"
        @click=${this.handleMove}
      >
        <img src="./imgs/right-chevron.svg" />
      </button>
      <div class="indicators">${indicators}</div>
    `;
  }
}

export default LuLitCarousel;

declare global {
  interface HTMLElementTagNameMap {
    "lulit-carousel": LuLitCarousel;
  }
}
