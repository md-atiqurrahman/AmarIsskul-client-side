import './Gallery.css';

const Gallery = () => {
  return (
    <div className="bg-white pt-[100px] pb-[70px]">
      <div className='flex justify-center items-center gap-[20px]'>
        <div className="gallery-btn  bg-white box-sha text-accent py-[7px] px-[18px] border border-primary rounded-[5px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary hover:text-white">
          All
        </div>
        <div className="gallery-btn   bg-white box-sha text-accent py-[7px] px-[18px] border border-primary rounded-[5px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary hover:text-white">
          Class Room
        </div>
        <div className="gallery-btn bg-white box-sha text-accent py-[7px] px-[18px] border border-primary rounded-[5px] text-[20px] font-normal leading-[24px] cursor-pointer capitalize transition-all duration-500 hover:bg-primary hover:text-white">
         School Campus
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Gallery;
