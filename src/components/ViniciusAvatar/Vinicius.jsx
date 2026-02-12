import React from 'react';
import styled from 'styled-components';
import vinnie from '../../assets/images/portfolio-image.jpg';

const HomeAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(280px, 40vw, 380px);
  margin-bottom: 0;
  margin-top: 0;
  filter: drop-shadow(0 0 40px rgba(4, 255, 140, 0.2));
  transition: all 0.5s ease;
  position: relative;
  z-index: 10;

  &:hover {
    filter: drop-shadow(0 0 60px rgba(4, 255, 140, 0.5));
    transform: scale(1.02);
  }
`;

const AvatarWrapper = styled.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  box-shadow: none;
  background: linear-gradient(135deg, #04ff8c, #06b6d4);
  position: relative;
`;

const AvatarImage = styled.img.attrs(props => ({
  width: props.width || "448",
  height: props.height || "448",
  fetchpriority: props.fetchpriority || "high" 
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
`;

const ClipPathSVG = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const HexagonalAvatar = () => {
  return (
    <>
      <ClipPathSVG>
        <defs>
          <clipPath id="avatar-clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.5 0, 0.93 0.25, 0.93 0.73, 0.5 0.97, 0.07 0.73, 0.07 0.25" />
          </clipPath>
        </defs>
      </ClipPathSVG>

      <HomeAvatar>
        <AvatarWrapper>
          <AvatarContainer>
            <AvatarImage 
              src={vinnie}
              alt="Vinícius Pereira"
              width="448" 
              height="448"
              fetchpriority="high" 
            />
          </AvatarContainer>
        </AvatarWrapper>
      </HomeAvatar>
    </>
  );
};

export default HexagonalAvatar;