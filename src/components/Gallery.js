const Gallery = () => {
  return (
    <div className="gallery container mx-auto">
      <h2 className="text-3xl font-bold uppercase text-indigo-700 py-5 text-center border-b border-dotted">
        Gallery
      </h2>
      <div className="photos flex justify-center gap-5 flex-wrap py-10">
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
        <div className="img h-60 w-80 object-cover rounded shadow-md overflow-hidden">
          <img
            src="https://www.lus.ac.bd/wp-content/uploads/2017/03/IMG_4577.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
