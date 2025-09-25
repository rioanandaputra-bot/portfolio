import { notFound } from "next/navigation";
import { blogPosts } from "@/constants/personalData";
import Breadcrumb from "@/components/sub/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Rio Ananda Putra Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-8 pt-20 max-w-4xl mx-auto px-6">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` }
        ]} />

        {/* Article Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-full text-orange-200 text-sm">
              {post.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-4">
            {post.title}
          </h1>
          
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-2xl p-8 mb-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              This article provides comprehensive insights into {post.title.toLowerCase()}. 
              The content explores various aspects and practical applications that will help 
              developers understand and implement the concepts discussed.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Key Concepts</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This section delves into the fundamental concepts and principles that form 
              the foundation of the topic. We&apos;ll explore practical examples and real-world 
              applications to ensure a thorough understanding.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Implementation</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here we discuss the step-by-step implementation process, including code examples 
              and best practices that you can apply in your own projects.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Understanding these concepts will significantly improve your development workflow 
              and help you build more efficient and maintainable applications.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-md text-orange-200 text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-gradient-to-br from-[#0300145e] via-[#0300148a] to-[#0300145e] border border-[#7042f861] rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-orange-300 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-2">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="text-center py-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-semibold"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}