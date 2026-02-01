import React from 'react';
import styled from 'styled-components';
import vinnie from '../../assets/images/portfolio-image.jpg';

// Container principal do avatar
const HomeAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(200px, 40vw, 300px);
  margin-bottom: min(60px, 5%);
  margin-top: 8%;
`;

// Wrapper que aplica o clip-path
const AvatarWrapper = styled.div`
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`;

// Container com a borda verde
const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  box-shadow: none;
  background: #04ff8c;
`;

// Imagem do avatar
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
`;

// SVG invisível para definir o clip-path (caso necessário)
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
            />
          </AvatarContainer>
        </AvatarWrapper>
      </HomeAvatar>
    </>
  );
};

export default HexagonalAvatar;