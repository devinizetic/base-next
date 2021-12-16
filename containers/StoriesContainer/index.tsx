import { StoryList } from "../../components/StoryList";
import withItemIds, { IWithItemIdsProps } from "../../hoc/withItemIds";
import { useFetchItems } from "../../hooks/useFetchItems";
import { isErrorParser } from "../../shared/helpers/isError";
import { useQuery } from "react-query";

const contentPerPage = 15;

export const StoriesContainer = withItemIds(({ ids }: IWithItemIdsProps) => {
  const fetchItems = useFetchItems();
  var idsPaginated = ids.slice(0, contentPerPage);
  const { isLoading, isError, error, data } = useQuery(
    ["items", idsPaginated],
    () => fetchItems(idsPaginated)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return (
      <div>
        An error has ocurred: {isErrorParser(error) ? error.message : "Unknown"}
      </div>
    );
  }

  return <>{data && <StoryList items={data} />}</>;
});
