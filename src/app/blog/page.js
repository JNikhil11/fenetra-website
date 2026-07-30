'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog-posts';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-page">
      <section className="hero">
        <div className="container">
          <h1>Blog & Insights</h1>
          <p className="subtitle">Industry updates, product guides, and sustainability insights from Fenetra Industries.</p>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="filter-container">
            {blogCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="post-grid">
              {filteredPosts.map(post => (
                <article key={post.slug} className="post-card">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="image-wrapper">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <span className="category-tag">{post.category}</span>
                    </div>
                    <div className="post-content">
                      <div className="meta">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="read-more">Read More →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .blog-page {
          min-height: 100vh;
        }
        
        .hero {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
        }

        .content {
          padding: 80px 0;
          background-color: var(--offwhite);
        }

        .filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .filter-btn {
          padding: 8px 24px;
          border-radius: 99px;
          border: 1px solid var(--coolgrey);
          background: white;
          color: var(--graphite);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          background: var(--offwhite);
        }

        .filter-btn.active {
          background: var(--cobalt); /* Using a placeholder cobalt color or var */
          background-color: #0056b3;
          color: white;
          border-color: #0056b3;
        }

        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .post-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .post-card a {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .image-wrapper {
          position: relative;
          height: 220px;
          width: 100%;
          background: #E2E8F0;
        }

        .category-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.9);
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #0056b3;
        }

        .post-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: monospace;
          color: #64748B;
          font-size: 0.875rem;
          margin-bottom: 12px;
        }

        .post-content h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--navy);
          line-height: 1.4;
        }

        .post-content p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .read-more {
          color: #0056b3;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          margin-top: auto;
        }

        .no-posts {
          text-align: center;
          padding: 60px 0;
          color: #64748B;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          .post-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
