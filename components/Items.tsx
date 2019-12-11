import React, { useEffect } from "react";

import { Result, Button, Pagination, BackTop } from "antd";
import { header } from "../pages/post/[item]";
import ItemList from "../components/ItemList";
import Link from "next/link";

interface Props {
  headers: header[];
  totalItem: number;
}

export default function Items(props: Props) {
  useEffect(() => {
    window.addEventListener("load", function() {
      const lazyImages: HTMLImageElement[] = [].slice.call(
        document.querySelectorAll("img.lazy")
      );

      if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver(function(
          entries,
          observer
        ) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target as HTMLImageElement;
              lazyImage.src = lazyImage.dataset.src as string;
              lazyImage.srcset = lazyImage.dataset.srcset as string;
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Possibly fall back to a more compatible method here
      }
    });
    if (document.readyState === "complete") {
      const lazyImages: HTMLImageElement[] = [].slice.call(
        document.querySelectorAll("img.lazy")
      );

      if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver(function(
          entries,
          observer
        ) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let lazyImage = entry.target as HTMLImageElement;
              lazyImage.src = lazyImage.dataset.src as string;
              lazyImage.srcset = lazyImage.dataset.srcset as string;
              lazyImageObserver.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
        });
      } else {
        // Possibly fall back to a more compatible method here
      }
    }
  }, props.headers);

  return (
    <div className="home--items">
      {props.headers.length !== 0 &&
        props.headers.map((header, index) => {
          return <ItemList {...header} key={`itemlist__${index}`} />;
        })}
      {props.headers.length === 0 && (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link href="/">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      )}
    </div>
  );
}
