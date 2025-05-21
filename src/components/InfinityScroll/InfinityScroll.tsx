import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import { Wrapper, Container } from "./InfinityScroll.style";
import styled, { keyframes } from "styled-components";

interface InfiniteScrollListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  pageSize?: number;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.img`
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
  display: block;
`;

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
    <Wrapper>
      <Container>
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;
          return (
            <div key={index} ref={isLast ? lastRef : null}>
              {renderItem(item, index)}
            </div>
          );
        })}
      </Container>
      {hasMore && <Loader src="/dragon-spinner.png" alt="Loading..." />}
    </Wrapper>
  );
};

export default InfiniteScrollList;
