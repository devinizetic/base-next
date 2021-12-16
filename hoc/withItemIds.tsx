import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchItemIds } from '../hooks/useFetchItemIds';
import { useQuery } from 'react-query'
import { isErrorParser } from '../shared/helpers/isError'

export interface IWithItemIdsProps {
  ids: number[];
}

const withItemIds =
  <P extends IWithItemIdsProps>(Component: React.ComponentType<P>) =>
  (props: P): React.ReactElement => {
    const fetchItemIds = useFetchItemIds();
    const { slug } = useParams<{ slug: string }>();
    // const { data, isLoading, execute } = useAsync<number[]>(() => fetchItemIds(slug));
    const {isLoading, isError, error, data} = useQuery(['itemIds', slug], () => fetchItemIds(slug))

    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }

    if (isError) {
      return (
        <div>
          An error has ocurred: {isErrorParser(error) ? error.message : 'Unknown'}
        </div>
      );
    }

    return <Component {...(props as P)} ids={data || []} />;
  };

export default withItemIds;
