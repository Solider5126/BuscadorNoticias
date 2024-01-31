const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;
  return (
    <div className="bg-white shadow-md rounded-t-lg flex flex-col justify-between w-96 h-full">
      <div className="">
        <img
          src={urlToImage}
          className="w-full h-56 object-cover rounded-t-lg"
          alt={`Imagen noticia ${title}`}
        />
        <div className="p-3 space-y-2">
          <p className="text-red-500 font-semibold">{source.name}</p>
          <p className="text-xl font-semibold">{title}</p>
        </div>
      </div>

      <a
        href={url}
        className="p-3 flex items-center justify-center w-full bg-blue-500 cursor-pointer"
      >
        <span className="text-white font-semibold text-xl">Leer Noticia</span>
      </a>
    </div>
  );
};

export default Noticia;
