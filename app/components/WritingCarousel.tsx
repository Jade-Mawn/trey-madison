"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Post } from "@/lib/posts";

function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return isoDate;
  }
}

export function WritingCarousel({ posts }: { posts: Post[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const cards = container.querySelectorAll("[data-carousel-card]");
    let closest = 0;
    let closestDist = Infinity;
    cards.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const cardCenter = r.left + r.width / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex);
    const ro = new ResizeObserver(updateActiveIndex);
    ro.observe(container);
    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      ro.disconnect();
    };
  }, [posts.length, updateActiveIndex]);

  if (posts.length === 0) {
    return (
      <p className="text-[var(--foreground-muted)] text-sm">No posts available.</p>
    );
  }

  return (
    <div className="relative w-full">
      {/* Side fades — wider zone */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 shrink-0 bg-gradient-to-r from-[var(--surface)] via-[var(--surface)]/80 to-transparent hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 shrink-0 bg-gradient-to-l from-[var(--surface)] via-[var(--surface)]/80 to-transparent hidden sm:block"
        aria-hidden
      />
      <div
        ref={containerRef}
        className="flex gap-0 overflow-x-auto overflow-y-visible scroll-smooth py-4 pb-6 snap-x snap-mandatory hide-scrollbar"
        style={{
          paddingLeft: "max(0.75rem, calc(50vw - 154px))",
          paddingRight: "max(0.75rem, calc(50vw - 154px))",
        }}
      >
        {posts.map((post, i) => {
          const isActive = i === activeIndex;
          return (
            <article
              key={post.link}
              data-carousel-card
              className="flex-shrink-0 w-[300px] snap-center snap-always transition-transform duration-300 ease-out"
              style={{
                transform: isActive ? "scale(1.05)" : "scale(0.68)",
                transformOrigin: "center center",
              }}
            >
              <div className="flex h-[400px] flex-col rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--surface)] shadow-sm">
                {post.image ? (
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shrink-0 overflow-hidden aspect-video bg-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      loading={i === 0 ? "eager" : "lazy"}
                      sizes="300px"
                    />
                  </Link>
                ) : (
                  <div className="shrink-0 aspect-video bg-[var(--border)]" />
                )}
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-4">
                  <h3 className="font-serif text-lg font-bold leading-snug line-clamp-2 shrink-0">
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] hover:opacity-80 focus:outline-none transition-opacity"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <time
                    dateTime={post.pubDate}
                    className="mt-1.5 shrink-0 block text-xs text-[var(--foreground-muted)]"
                  >
                    {formatDate(post.pubDate)}
                  </time>
                  <div className="mt-3 flex min-h-0 flex-1 items-center overflow-hidden">
                    {isActive && post.contentSnippet ? (
                      <p className="text-left text-[var(--foreground-muted)] text-sm leading-relaxed line-clamp-3">
                        {post.contentSnippet}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <div
          data-carousel-card
          className="flex-shrink-0 w-[300px] snap-center snap-always transition-transform duration-300 ease-out"
          style={{
            transform:
              activeIndex === posts.length ? "scale(1.05)" : "scale(0.68)",
            transformOrigin: "center center",
          }}
        >
          <Link
            href="https://treymadison.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[400px] flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2"
          >
            <span className="font-serif text-lg font-bold text-[var(--foreground)]">
              See more on Substack
            </span>
            <span className="mt-2 text-[var(--foreground-muted)]" aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
