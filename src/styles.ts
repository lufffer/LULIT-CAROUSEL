import { css } from "lit";

const styles = css`
  :host {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 1rem;
    display: block;
    overflow: hidden;
  }

  ::slotted(*) {
    position: relative;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .left {
    left: -100%;
  }

  .move-right {
    left: -100%;
  }

  .move-left {
    left: 0%;
  }

  .left-chevron,
  .right-chevron {
    position: absolute;
    top: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    user-selection: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    opacity: 0.75;
  }

  .left-chevron {
    left: 1rem;
  }

  .right-chevron {
    right: 1rem;
  }

  .indicators {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .indicator {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: white;
    opacity: 0.75;
    cursor: pointer;
  }

  .selected {
    background-color: black;
  }
`;

export default styles;
