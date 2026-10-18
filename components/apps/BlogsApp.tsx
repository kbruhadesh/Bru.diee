"use client";

import { motion } from "framer-motion";
import { blogs } from "@/lib/content";
import { IconBook } from "../os/Icons";

export default function BlogsApp() {
  if (blogs.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="h-10 w-10"><IconBook /></span>
        <p className="font-pixel text-[12px] text-ink">no posts yet</p>
        <p className="font-body text-[13px] text-inkSoft">first one is in the works — check back soon.</p>
      </div>
    );
  }

  return (
    <div className="win-scroll h-full overflow-y-auto p-6">
      {blogs.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="mb-4 rounded-xl border-2 border-ink/15 bg-cream p-4 transition-shadow hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 h-8 w-8 shrink-0"><IconBook /></span>
            <div>
              <h2 className="font-pixel text-[12px] text-ink">{post.title}</h2>
              <p className="mb-1.5 font-mono text-[11px] text-inkSoft">{post.date}</p>
              <p className="mb-2 font-body text-[13px] leading-relaxed text-inkSoft">{post.summary}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-md bg-ink/10 px-2 py-0.5 font-mono text-[11px] text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {post.link && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-pixel text-[10px] text-ink underline underline-offset-4"
                >
                  read →
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
