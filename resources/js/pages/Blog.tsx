import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface BlogProps {
    blog: {
        id: number;
        title: string;
        description: string;
        content: string;
        author: string; // Keep for backward compatibility
        author_name?: string; // Add these new fields
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
                <h1 className="text-2xl font-semibold">No blog posts yet 📝</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Check back later for the latest update.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Head title={`${blog.title} - Blog`} />

            <Header />

            <div className="container mx-auto px-6 py-12 max-w-3xl">
                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {blog.title}
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-8">
                        {blog.author_avatar ? (
                            <img
                                src={`/storage/${blog.author_avatar}`}
                                alt={blog.author_name || blog.author}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-800 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">
                                    {blog.author_name
                                        ? blog.author_name.charAt(0).toUpperCase()
                                        : blog.author
                                            ? blog.author.charAt(0).toUpperCase()
                                            : "A"}
                                </span>
                            </div>
                        )}
                        <div>
                            <p className="text-gray-900 dark:text-white font-medium">
                                {blog.author_name || blog.author}
                            </p>
                            {blog.author_role && (
                                <p className="text-gray-600 dark:text-gray-400 text-xs">
                                    {blog.author_role}
                                </p>
                            )}
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{blog.date}</p>
                        </div>
                    </div>
                </div>

                {/* Blog Featured Image */}
                {blog.featured_image && (
                    <div className="mb-12">
                        <img
                            src={`/storage/${blog.featured_image}`}
                            alt={blog.title}
                            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                )}

                {/* Blog Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <p>{blog.description}</p>
                        
                    </div>
                </div>

                {/* Simple Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl p-6 border border-white/30 dark:border-gray-700 bg-[linear-gradient(131.78deg,#3B3D35_-2.99%,#DDD9D7_107.43%)] dark:bg-[linear-gradient(347.24deg,#0F93FF_-105.12%,#F5FEE6_91.01%)]">
                        <p className="mb-4 font-medium text-white dark:text-gray-900">
                            Read More Blogs
                        </p>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/30 dark:bg-black/10 dark:hover:bg-black/20 text-white dark:text-gray-900 border border-white/40 dark:border-black/20"
                            onClick={() => (window.location.href = "/admin/blogs")}
                        >
                            View All
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="rounded-2xl p-6 border border-white/30 dark:border-gray-700 bg-[linear-gradient(10.12deg,#999999_0%,#000000_96.91%)] dark:bg-[linear-gradient(90deg,#A5FDCB_0%,#CDFDE7_100%)]">
                        <p className="mb-4 font-medium text-white dark:text-gray-900">
                            Go to Dashboard
                        </p>
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/30 dark:bg-black/10 dark:hover:bg-black/20 text-white dark:text-gray-900 border border-white/40 dark:border-black/20"
                            onClick={() => (window.location.href = "/admin/dashboard")}
                        >
                            Dashboard
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
