import useNoticias from "../hook/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const Formulario = () => {
  const{categoria,handleChangeCategoria}= useNoticias()
  return (
    <div className="container mx-auto flex justify-center my-16">
      <form className="  w-96">
        <select onChange={handleChangeCategoria} value={categoria} className="sm:p-5 p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
          <option selected>-- Selecciona una categoria --</option>
          {CATEGORIAS.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </select>
        <input
          className="bg-blue-500 w-full mt-5 p-3 cursor-pointer hover:bg-blue-700 rounded-lg text-white font-bold text-xl"
          type="submit"
          value={"Buscar Noticias"}
        />
      </form>
    </div>
  );
};

export default Formulario;
