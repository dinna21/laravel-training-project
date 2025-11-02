import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import "../../css/blog-hero-animation.css";

interface BlogProps {
    blog: {
        id: number;
        title: string;
        description: string;
        content: string;
        author: string;
        author_name?: string;
        author_role?: string;
        author_avatar?: string | null;
        date: string;
        featured_image: string | null;
        status: string;
    } | null;
}

export default function Blog({ blog }: BlogProps) {
    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <h1 className="text-2xl font-semibold animate-fade-in">No blog posts yet 📝</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2 animate-fade-in animate-delay-200">Check back later for the latest update.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
            <Head title={`${blog.title} - Blog`} />

            <Header />

            <div className="container mx-auto px-6 py-12 max-w-3xl relative z-10">
                {/* Page Title - Fade in from top */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Author Info - Slide in from left */}
                    <div className="flex items-center gap-3 mb-8">
                        {blog.author_avatar ? (
                            <img
                                src={`/storage/${blog.author_avatar}`}
                                alt={blog.author_name || blog.author}
                                className="w-12 h-12 rounded-full object-cover transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-blue-500/30"
                            />
                        ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-blue-500/30">
                                <span className="text-white text-base font-semibold">
                                    {blog.author_name
                                        ? blog.author_name.charAt(0).toUpperCase()
                                        : blog.author
                                            ? blog.author.charAt(0).toUpperCase()
                                            : "A"}
                                </span>
                            </div>
                        )}
                        <div>
                            <p className="text-gray-900 dark:text-white font-semibold">
                                {blog.author_name || blog.author}
                            </p>
                            {blog.author_role && (
                                <p className="text-gray-600 dark:text-gray-400 text-xs">
                                    {blog.author_role}
                                </p>
                            )}
                            <p className="text-gray-500 dark:text-gray-500 text-sm">{blog.date}</p>
                        </div>
                    </div>
                </div>

                {/* Blog Featured Image */}
                {blog.featured_image && (
                    <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl">
                        <img
                            src={`/storage/${blog.featured_image}`}
                            alt={blog.title}
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                    </div>
                )}

                {/* Blog Content - Fade in from bottom */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <p className="text-lg">{blog.description}</p>
                    </div>
                </div>

                {/* Action Cards - Slide in from sides with animations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Card - Slide from left with animation */}
                    <div className="rounded-2xl p-6 border border-white/30 dark:border-gray-700 bg-[linear-gradient(131.78deg,#3B3D35_-2.99%,#DDD9D7_107.43%)] dark:bg-[linear-gradient(347.24deg,#0F93FF_-105.12%,#F5FEE6_91.01%)] animate-fade-in-left animate-delay-300 hover-lift">
                        <p className="mb-4 font-medium text-white dark:text-gray-900">
                            Felis amet orci diam at
                        </p>
                        <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/40 dark:bg-black/10 dark:hover:bg-black/25 text-white dark:text-gray-900 border border-white/40 dark:border-black/20 hover:gap-4 hover:px-6 hover:shadow-lg">
                            History
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Second Card - Slide from right with animation */}
                    <div className="rounded-2xl p-6 border border-white/30 dark:border-gray-700 bg-[linear-gradient(10.12deg,#999999_0%,#000000_96.91%)] dark:bg-[linear-gradient(90deg,#A5FDCB_0%,#CDFDE7_100%)] animate-fade-in-right animate-delay-400 hover-lift">
                        <p className="mb-4 font-medium text-white dark:text-gray-900">
                            Praesent in cras nam quis ultrices.
                        </p>
                        <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/40 dark:bg-black/10 dark:hover:bg-black/25 text-white dark:text-gray-900 border border-white/40 dark:border-black/20 hover:gap-4 hover:px-6 hover:shadow-lg">
                            Outline
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}