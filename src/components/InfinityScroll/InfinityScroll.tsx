import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./InfinityScroll.style";
import Spinner from "../Spinner/Spinner";

type InfiniteScrollListProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
};

const InfiniteScrollList = <T,>({
  data,
  renderItem,
  pageSize = 8,
}: InfiniteScrollListProps<T>): JSX.Element => {
  const [page, setPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const newItems = data.slice(0, page * pageSize);
    setVisibleItems(newItems);
    setHasMore(newItems.length < data.length);
  }, [data, page, pageSize]);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore],
  );

  return (
    <S.Wrapper>
      <S.Container>
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;
          return (
            <div key={index} ref={isLast ? lastRef : null}>
              {renderItem(item, index)}
            </div>
          );
        })}
      </S.Container>
      <Spinner isLoading={hasMore} />
    </S.Wrapper>
  );
};

export default InfiniteScrollList;
