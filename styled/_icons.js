
import styled from 'styled-components';
import theme from './_variables'

export default styled.div`
  // CSS Icons
  ${theme.$icon}-border-width: ${theme.$border}-width-lg;
  
  .icon {
    box-sizing: border: BORDERBOXox;
    display: inline: INLINEBLOCKlock;
    font-size: inherit;
    font-style: normal;
    height: 1em;
    position: relative;
    text-indent: -9999px;
    vertical-align: middle;
    width: 1em;
    &::before,
    &::after {
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
  // Icon arrows
  .icon-arrow-down,
  .icon-arrow-left,
  .icon-arrow-right,
  .icon-arrow-up,
  .icon-downward,
  .icon-back,
  .icon-forward,
  .icon-upward {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-right: 0;
      content: "";
      height: .65em;
      width: .65em;
    }
  }
  
  .icon-arrow-down {
    &::before {
      transform: translate(-50%, -75%) rotate(225deg);
    }
  }
  
  .icon-arrow-left {
    &::before {
      transform: translate(-25%, -50%) rotate(-45deg);
    }
  }
  
  .icon-arrow-right {
    &::before {
      transform: translate(-75%, -50%) rotate(135deg);
    }
  }
  
  .icon-arrow-up {
    &::before {
      transform: translate(-50%, -25%) rotate(45deg);
    }
  }
  
  .icon-back,
  .icon-forward {
    &::after {
      background: currentColor;
      content: "";
      height: ${theme.$icon}-border-width;
      width: .8em;
    }
  }
  
  .icon-downward,
  .icon-upward {
    &::after {
      background: currentColor;
      content: "";
      height: .8em;
      width: ${theme.$icon}-border-width;
    }
  }
  
  .icon-back {
    &::after {
      left: 55%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  
  .icon-downward {
    &::after {
      top: 45%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-135deg);
    }
  }
  
  .icon-forward {
    &::after {
      left: 45%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(135deg);
    }
  }
  
  .icon-upward {
    &::after {
      top: 55%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  
  // Icon caret
  .icon-caret {
    &::before {
      border-top: .3em solid currentColor;
      border-right: .3em solid transparent;
      border-left: .3em solid transparent;
      content: "";
      height: 0;
      width: 0;
      transform: translate(-50%, -25%);
    }
  }
  
  // Icon menu
  .icon-menu {
    &::before {
      background: currentColor;
      box-shadow: 0 -.35em, 0 .35em;
      content: "";
      height: ${theme.$icon}-border-width;
      width: 100%;
    }
  }
  
  // Icon apps
  .icon-apps {
    &::before {
      background: currentColor;
      box-shadow: -.35em -.35em, -.35em 0, -.35em .35em, 0 -.35em, 0 .35em, .35em -.35em, .35em 0, .35em .35em;
      content: "";
      height: 3px;
      width: 3px;
    }
  }
  
  // Icon resize
  .icon-resize-horiz,
  .icon-resize-vert {
    &::before,
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-right: 0;
      content: "";
      height: .45em;
      width: .45em;
    }
    &::before {
      transform: translate(-50%, -90%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -10%) rotate(225deg);
    }
  }
  
  .icon-resize-horiz {
    &::before {
      transform: translate(-90%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-10%, -50%) rotate(135deg);
    }
  }
  
  // Icon more
  .icon-more-horiz,
  .icon-more-vert {
    &::before {
      background: currentColor;
      box-shadow: -.4em 0, .4em 0;
      border-radius: 50%;
      content: "";
      height: 3px;
      width: 3px;
    }
  }
  .icon-more-vert {
    &::before {
      box-shadow: 0 -.4em, 0 .4em;
    }
  }
  
  // Icon plus, minus, cross
  .icon-plus,
  .icon-minus,
  .icon-cross {
    &::before {
      background: currentColor;
      content: "";
      height: ${theme.$icon}-border-width;
      width: 100%;
    }
  }
  .icon-plus,
  .icon-cross {
    &::after {
      background: currentColor;
      content: "";
      height: 100%;
      width: ${theme.$icon}-border-width;
    }
  }
  .icon-cross {
    &::before {
      width: 100%;
    }
    &::after {
      height: 100%;
    }
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
  
  // Icon check
  .icon-check {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-right: 0;
      border-top: 0;
      content: "";
      height: .5em;
      width: .9em;
      transform: translate(-50%, -75%) rotate(-45deg);
    }
  }
  
  // Icon stop
  .icon-stop {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: 50%;
    &::before {
      background: currentColor;
      content: "";
      height: ${theme.$icon}-border-width;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 1em;
    }
  }
  
  // Icon shutdown
  .icon-shutdown {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    &::before {
      background: currentColor;
      content: "";
      height: .5em;
      top: .1em;
      width: ${theme.$icon}-border-width;
    }
  }
  
  // Icon refresh
  .icon-refresh {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50%;
      border-right-color: transparent;
      content: "";
      height: 1em;
      width: 1em;
    }
    &::after {
      border: .2em solid currentColor;
      border-top-color: transparent;
      border-left-color: transparent;
      content: "";
      height: 0;
      left: 80%;
      top: 20%;
      width: 0;
    }
  }
  
  // Icon search
  .icon-search {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50%;
      content: "";
      height: .75em;
      left: 5%;
      top: 5%;
      transform: translate(0, 0) rotate(45deg);
      width: .75em;
    }
    &::after {
      background: currentColor;
      content: "";
      height: ${theme.$icon}-border-width;
      left: 80%;
      top: 80%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: .4em;
    }
  }
  
  // Icon edit
  .icon-edit {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      content: "";
      height: .4em;
      transform: translate(-40%, -60%) rotate(-45deg);
      width: .85em;
    }
    &::after {
      border: .15em solid currentColor;
      border-top-color: transparent;
      border-right-color: transparent;
      content: "";
      height: 0;
      left: 5%;
      top: 95%;
      transform: translate(0, -100%);
      width: 0;
    }
  }
  
  // Icon delete
  .icon-delete {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom-left-radius: ${theme.$border}-radius;
      border-bottom-right-radius: ${theme.$border}-radius;
      border-top: 0;
      content: "";
      height: .75em;
      top: 60%;
      width: .75em;
    }
    &::after {
      background: currentColor;
      box-shadow: -.25em .2em, .25em .2em;
      content: "";
      height: ${theme.$icon}-border-width;
      top: ${theme.$icon}-border-width/2;
      width: .5em;
    }
  }
  
  // Icon share
  .icon-share {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: ${theme.$border}-radius;
    border-right: 0;
    border-top: 0;
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-left: 0;
      border-top: 0;
      content: "";
      height: .4em;
      left: 100%;
      top: .25em;
      transform: translate(-125%, -50%) rotate(-45deg);
      width: .4em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-right: 0;
      border-radius: 75% 0;
      content: "";
      height: .5em;
      width: .6em;
    }
  }
  
  // Icon flag
  .icon-flag {
    &::before {
      background: currentColor;
      content: "";
      height: 1em;
      left: 15%;
      width: ${theme.$icon}-border-width;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom-right-radius: ${theme.$border}-radius;
      border-left: 0;
      border-top-right-radius: ${theme.$border}-radius;
      content: "";
      height: .65em;
      top: 35%;
      left: 60%;
      width: .8em;
    }
  }
  
  // Icon bookmark
  .icon-bookmark {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-top-left-radius: ${theme.$border}-radius;
      border-top-right-radius: ${theme.$border}-radius;
      content: "";
      height: .9em;
      width: .8em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-left: 0;
      border-radius: ${theme.$border}-radius;
      content: "";
      height: .5em;
      transform: translate(-50%, 35%) rotate(-45deg) skew(15deg, 15deg);
      width: .5em;
    }
  }
  
  // Icon download & upload
  .icon-download,
  .icon-upload {
    border-bottom: ${theme.$icon}-border-width solid currentColor;
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-right: 0;
      content: "";
      height: .5em;
      width: .5em;
      transform: translate(-50%, -60%) rotate(-135deg);
    }
    &::after {
      background: currentColor;
      content: "";
      height: .6em;
      top: 40%;
      width: ${theme.$icon}-border-width;
    }
  }
  
  .icon-upload {
    &::before {
      transform: translate(-50%, -60%) rotate(45deg);
    }
    &::after {
      top: 50%;
    }
  }
  
  // Icon time
  .icon-time {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: 50%;
    &::before {
      background: currentColor;
      content: "";
      height: .4em;
      transform: translate(-50%, -75%);
      width: ${theme.$icon}-border-width;
    }
    &::after {
      background: currentColor;
      content: "";
      height: .3em;
      transform: translate(-50%, -75%) rotate(90deg);
      transform-origin: 50% 90%;
      width: ${theme.$icon}-border-width;
    }
  }
  
  // Icon mail
  .icon-mail {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: ${theme.$border}-radius;
      content: "";
      height: .8em;
      width: 1em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-right: 0;
      border-top: 0;
      content: "";
      height: .5em;
      transform: translate(-50%, -90%) rotate(-45deg) skew(10deg, 10deg);
      width: .5em;
    }
  }
  
  // Icon people
  .icon-people {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50%;
      content: "";
      height: .45em;
      top: 25%;
      width: .45em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50% 50% 0 0;
      content: "";
      height: .4em;
      top: 75%;
      width: .9em;
    }
  }
  
  // Icon message
  .icon-message {
    border: ${theme.$icon}-border-width solid currentColor;
    border-bottom: 0;
    border-radius: ${theme.$border}-radius;
    border-right: 0;
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-left: 0;
      border-bottom-right-radius: ${theme.$border}-radius;
      border-top: 0;
      content: "";
      height: .8em;
      left: 65%;
      top: 40%;
      width: .7em;
    }
    &::after {
      background: currentColor;
      border-radius: ${theme.$border}-radius;
      content: "";
      height: .3em;
      left: 10%;
      top: 100%;
      transform: translate(0, -90%) rotate(45deg);
      width: ${theme.$icon}-border-width;
    }
  }
  
  // Icon photo
  .icon-photo {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: ${theme.$border}-radius;
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50%;
      content: "";
      height: .25em;
      left: 35%;
      top: 35%;
      width: .25em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom: 0;
      border-left: 0;
      content: "";
      height: .5em;
      left: 60%;
      transform: translate(-50%, 25%) rotate(-45deg);
      width: .5em;
    }
  }
  
  // Icon link
  .icon-link {
    &::before,
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 5em 0 0 5em;
      border-right: 0;
      content: "";
      height: .5em;
      width: .75em;
    }
    &::before {
      transform: translate(-70%, -45%) rotate(-45deg);
    }
    &::after {
      transform: translate(-30%, -55%) rotate(135deg);
    }
  }
  
  // Icon location
  .icon-location {
    &::before {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50% 50% 50% 0;
      content: "";
      height: .8em;
      transform: translate(-50%, -60%) rotate(-45deg);
      width: .8em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-radius: 50%;
      content: "";
      height: .2em;
      transform: translate(-50%, -80%);
      width: .2em;
    }
  }
  
  // Icon emoji
  .icon-emoji {
    border: ${theme.$icon}-border-width solid currentColor;
    border-radius: 50%;
    &::before {
      border-radius: 50%;
      box-shadow: -.17em -.15em, .17em -.15em;
      content: "";
      height: .1em;
      width: .1em;
    }
    &::after {
      border: ${theme.$icon}-border-width solid currentColor;
      border-bottom-color: transparent;
      border-radius: 50%;
      border-right-color: transparent;
      content: "";
      height: .5em;
      transform: translate(-50%, -40%) rotate(-135deg);
      width: .5em;
    }
  }
  
  // Component icon support
  .accordion,
  .btn,
  .toast,
  .menu {
    .icon {
      vertical-align: -10%;
    }
  }
  
`;
