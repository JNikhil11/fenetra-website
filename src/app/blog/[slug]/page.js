import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  return {
    title: post ? post.title + ' | Fenetra Industries' : 'Blog Post',
    description: post?.excerpt || '',
  };
}

function renderMarkdown(md) {
  if (!md) return '';
  let html = md;
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Lists
  html = html.replace(/^\s*-\s+(.*)$/gim, '<ul><li>$1</li></ul>');
  html = html.replace(/<\/ul>\n<ul>/gim, '');
  
  // Tables
  html = html.replace(/^\|(.+)\|$/gim, (match) => {
    let row = match.trim();
    if (row.includes('---')) return ''; // Skip separator row
    let cells = row.split('|').filter(c => c).map(c => c.trim());
    return '<tr>' + cells.map(c => '<td>' + c + '</td>').join('') + '</tr>';
  });
  html = html.replace(/(<tr>.*?<\/tr>)+/gs, (match) => {
    let rows = match.split('</tr>').filter(r => r).map(r => r + '</tr>');
    let thead = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
    let tbody = rows.slice(1).join('');
    return '<table><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table>';
  });

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  
  // Cleanup empty p
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Cleanup p around blocks
  html = html.replace(/<p>(<h[1-6]>.*?<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>.*?<\/ul>)<\/p>/gs, '$1');
  html = html.replace(/<p>(<table>.*?<\/table>)<\/p>/gs, '$1');
  
  return html;
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Post not found</h1>
        <Link href="/blog" style={{ color: '#0056b3' }}>← Back to Blog</Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="blog-post-page">
      <section className="hero">
        <div className="container hero-content">
          <span className="category-tag">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>By Fenetra Industries Team</span>
          </div>
        </div>
      </section>

      <section className="article-container">
        <article 
          className="content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
        
        <div className="share-section">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-btn">LinkedIn</button>
            <button className="share-btn">Twitter</button>
            <button className="share-btn">Facebook</button>
          </div>
        </div>
      </section>

      <section className="related-posts">
        <div className="container">
          <h2>More from the Blog</h2>
          <div className="post-grid">
            {relatedPosts.map(related => (
              <article key={related.slug} className="post-card">
                <Link href={`/blog/${related.slug}`}>
                  <div className="image-wrapper">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="card-category">{related.category}</span>
                  </div>
                  <div className="post-card-content">
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                    <span className="read-more">Read More →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Source Premium Polymers?</h2>
          <p>Get in touch with our experts to find the perfect material for your application.</p>
          <Link href="/contact" className="cta-button">
            Request a Quotation
          </Link>
        </div>
      </section>

      <style>{`
        .blog-post-page {
          background-color: var(--offwhite);
        }

        .hero {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: #60A5FA;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: monospace;
          color: rgba(255, 255, 255, 0.7);
        }

        .article-container {
          max-width: 760px;
          margin: -40px auto 80px;
          background: white;
          padding: 60px;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .content {
          color: #334155;
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .content :global(h2) {
          font-size: 2rem;
          color: #0F172A;
          margin: 48px 0 24px;
        }

        .content :global(h3) {
          font-size: 1.5rem;
          color: #0F172A;
          margin: 32px 0 16px;
        }

        .content :global(p) {
          margin-bottom: 24px;
        }

        .content :global(ul), .content :global(ol) {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        .content :global(li) {
          margin-bottom: 8px;
        }

        .content :global(strong) {
          color: #0F172A;
        }

        .content :global(a) {
          color: #0056b3;
          text-decoration: underline;
        }

        .content :global(table) {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
        }

        .content :global(th), .content :global(td) {
          border: 1px solid #E2E8F0;
          padding: 12px 16px;
          text-align: left;
        }

        .content :global(th) {
          background-color: #F8FAFC;
          font-weight: 600;
          color: #0F172A;
        }

        .share-section {
          margin-top: 60px;
          padding-top: 32px;
          border-top: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .share-section h3 {
          font-size: 1.125rem;
          margin: 0;
        }

        .share-buttons {
          display: flex;
          gap: 12px;
        }

        .share-btn {
          padding: 8px 16px;
          border-radius: 6px;
          border: 1px solid #E2E8F0;
          background: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
        }

        .share-btn:hover {
          background: #F1F5F9;
        }

        .related-posts {
          background: #F8FAFC;
          padding: 80px 0;
        }

        .related-posts h2 {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 40px;
          color: #0F172A;
        }

        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .post-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .post-card:hover {
          transform: translateY(-4px);
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
          height: 200px;
          background: #E2E8F0;
        }

        .card-category {
          position: absolute;
          top: 12px;
          right: 12px;
          background: white;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0056b3;
        }

        .post-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .post-card-content h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: #0F172A;
        }

        .post-card-content p {
          color: #64748B;
          font-size: 0.875rem;
          margin-bottom: 16px;
          line-height: 1.6;
          flex-grow: 1;
        }

        .read-more {
          color: #0056b3;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .cta-section {
          background-color: var(--navy);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .cta-section p {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-block;
          background: #0056b3;
          color: white;
          padding: 16px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.125rem;
          transition: background 0.2s;
        }

        .cta-button:hover {
          background: #004494;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          .article-container {
            margin: -20px 20px 40px;
            padding: 32px 20px;
          }
          .meta {
            flex-wrap: wrap;
            justify-content: center;
          }
          .share-section {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
