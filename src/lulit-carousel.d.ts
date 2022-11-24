import { LitElement } from "lit";
declare class LuLitCarousel extends LitElement {
    static styles: import("lit").CSSResult;
    private selected;
    private prev;
    private next;
    private container;
    private leftChevron;
    private rightChevron;
    private indicators;
    ride: boolean;
    time: number;
    dir: string;
    duration: string;
    private selectedIndicator;
    private touchStartX;
    private touchEndX;
    private touchMoveX;
    private touchStartY;
    private touchEndY;
    private touchMoveY;
    private maxSelected;
    private activeTransition;
    private changeIndicator;
    private handleTransition;
    private moveLeft;
    private moveRight;
    private handleMove;
    protected handleTouchStart: (e: TouchEvent) => void;
    protected handleTouchEnd: (e: TouchEvent) => void;
    protected firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export default LuLitCarousel;
declare global {
    interface HTMLElementTagNameMap {
        "lulit-carousel": LuLitCarousel;
    }
}
