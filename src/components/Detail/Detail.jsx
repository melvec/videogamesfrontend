import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useGetGameByIdQuery } from "../../redux/apiSlice";
import Nav from "../Nav/Nav";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetGameByIdQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
<>
<Nav />
    <div className={style.cardContainer}>
      <div className={style.cardleft}>
        <h2>Game Id: {id}</h2>
        <h2 className="platforms">Name: {data.name}</h2>
        <h2>Released: {data.released}</h2>
        <h2>Ratings: {data.rating}</h2>
        <div className={style.description}>
          Description:
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
        <h2>Platforms:</h2>
        <div className={style.platforms}>
          {data.platforms &&
            data.platforms.map((platform) => (
              <div key={platform.platform.id} className={style.platform}>
                {platform.platform.name}
              </div>
            ))}
        </div>
      </div>
      <div className={style.cardright}>
        <img src={data.image} alt="Game Cover" />
      </div>
    </div>

</>
  
  );
};

export default Detail;
