import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { StoriesContainer } from "../../containers/StoriesContainer";
import styles from './stories.module.css';

const StoriesPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const title = useMemo(() => {
    if (slug === "ask") return "Ask Stories";
    if (slug === "best") return "Best Stories";
    if (slug === "show") return "Show Stories";
    if (slug === "top") return "Top Stories";
    return "News Stories";
  }, [slug]);

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <StoriesContainer ids={[]} />
    </>
  );
};

export default StoriesPage;
