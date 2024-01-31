import useNoticias from "../hook/useNoticias";
import Noticia from "./Noticia";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <div className="container mx-auto ">
      <h2 className="text-center text-5xl">Últimas Noticias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} />
        ))}
      </div>
      <Stack
        className="pb-6"
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination
          page={pagina}
          onChange={handleChangePagina}
          count={totalPaginas}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default ListadoNoticias;
