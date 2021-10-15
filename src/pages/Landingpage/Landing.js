import styled from "styled-components";

export const mainlanding = styled.div `
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    `
export const box1 = styled.div`
    width: 530px;
    height: 625px;
    background-image: url("/images/essai.png");
    position: absolute;
    bottom: -100%;
    left: 30%;
    animation: anim 2s forwards;
    z-index: 6;
    ::after {
        content: '';
        position: absolute;
        width: 530px;
        height: 625px;
        background-image: url("/images/essai1.png");
        left: 0px;
        z-index: 5;
    }
    @keyframes anim {
        from {
              bottom: -100%;
        }
        to {
          bottom: 0%;
        }
      }
    @keyframes anim2 {
        from {
          left: 30%;
          width: 530px;
        }
        to {
          width: 0px;
            left: 50%;
        }
      }
    `

export const box2 = styled.div`
    width: auto;
    height: auto;
    color: var(--white);
    font-size: 10em;
    font-weight: 500;
    line-height: 130px;
    position: absolute;
    top: 250px;
    left: 100px;
    overflow: hidden;
    `

export const textlanding = styled.div`
    position: relative;
    left: -100%;
    animation: anim3 2s forwards 3s;
  }
    @keyframes anim3 {
    from {
        left: -100%;
    }
    to {
        left: 0%;
    }
    `