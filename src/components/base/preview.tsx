import { EmphasisButton } from 'atoms/buttons';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface PreviewImage {
  onChange: Function;
  state: any;
}

export default ({ onChange, state }: PreviewImage ) => {
  const [ isModal, setModal ] = useState(false);
  const [ crop, setCrop ] = useState(null) as any;
  const maskRef = useRef<any>();
  const imageRef = useRef<any>();
  const previewCanvasRef = useRef<any>();

  useEffect(() => {
    if (!crop || !previewCanvasRef.current || !imageRef.current) {
      return;
    }

    const image = imageRef.current;
    const canvas = previewCanvasRef.current;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [crop]);


  const mouseMoveEvent = (e: any) => {
    const nx = e.clientX;
    const ny = e.clientY;
    const tx = imageRef.current.px;
    const ty = imageRef.current.py;

    const ipx = Number(imageRef.current.style.left.replace('px',''));
    const ipy = Number(imageRef.current.style.top.replace('px', ''));
    
    const mx = maskRef.current.clientWidth;
    const my = maskRef.current.clientHeight;
    const ix = imageRef.current.clientWidth;
    const iy = imageRef.current.clientHeight;
    const mol = maskRef.current.offsetLeft;
    const mot = maskRef.current.offsetTop;
    const border = 5;

    if(mx-ix+border+mol <= ipx+nx-tx && ipx+nx-tx <= border+ mol) {
      imageRef.current.style.left = `${ipx+nx-tx}px`;
    }
    if(my-iy+border+mot <= ipy+ny-ty && ipy+ny-ty <= border+mot) {
      imageRef.current.style.top = `${ipy+ny-ty}px`;
    }

    imageRef.current.py = e.clientY;
    imageRef.current.px = e.clientX;
  };

  const moveListenStart = () => {
    document.addEventListener('mousemove', mouseMoveEvent);
  }

  const moveListenEnd = () => {
    imageRef.current.px = undefined;
    imageRef.current.py = undefined;

    const x = imageRef.current.offsetLeft*-1;
    const y = imageRef.current.offsetTop*-1;
    const width = maskRef.current.clientWidth;
    const height = maskRef.current.clientHeight;

    setCrop({unit: 'px', x, y, width, height})
    document.removeEventListener('mousemove', mouseMoveEvent);
  }

  const saveEditImage = (r:any, c:any) => {
    console.log(r, c);
    const blob = r.toBlob((imageFile:any) => {
      onChange({ ...state, imageFile });
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const { result } = finishedEvent.target as any;
        onChange({ ...state, preview_image: result });
      }
      return reader.readAsDataURL( imageFile );
    }, 'image/png', 1);

    setModal(false);
  }

  return (
    <Container>
      {isModal &&
        <Modal
          onMouseUp={()=> moveListenEnd()}
          onDragStart={e => e.preventDefault()}
        >
          <Board>
            <Headline>
              <Cancel onClick={() => setModal(false)}>취소</Cancel>
              <EditButton onClick={()=> saveEditImage(previewCanvasRef.current, crop)}>저장</EditButton>
            </Headline>
            <ImageEditWrap onMouseDown={() => moveListenStart()}>
            <Image 
              ref={imageRef}
              src={state.preview_image}
            />
            <MaskWrap ref={maskRef} >
            </MaskWrap>
            </ImageEditWrap>
            <canvas           style={{
            display: 'none',
            width: Math.round(crop?.width ?? 0),
            height: Math.round(crop?.height ?? 0)
          }}ref={previewCanvasRef} />
          </Board>
        </Modal>
      }
      <PreviewImage 
        src={state.preview_image}
        onClick={() => setModal(true)}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const PreviewImage = styled.img`
  width: 300px;
  height: 180px;
`;

const Cancel = styled.button``;
const EditButton = styled.button`
  border-radius: 50px;
  padding: 7px 15px;
  background: black;
  color: white;
`;

const Modal = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0, 0.5);
`;

const Headline = styled.div`
  padding: 10px;
  height: 50px;
`;

const Board = styled.div`
  background: white;
  border-radius: 30px;
  width: 600px;
  height: 600px;

  @media only screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

const ImageEditWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 450px;
`;

const MaskWrap = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 5px solid blue;
  top: 20px;
  left: 50px;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  box-shadow: rgb(230 236 240 / 70%) 0px 0px 0px 9999px;
`;

const Image = styled.img`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;