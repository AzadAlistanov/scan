import './style.scss';


function ImageBlock() {
  return (
    <div className='image-block'>
      <div className="container">
        <div className='image-block__wrap'>
          <img src="/images/image-block/image-block-man.svg" alt="" />
          <img className='image-block-cloud' src="/images/image-block/cloud.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ImageBlock;
