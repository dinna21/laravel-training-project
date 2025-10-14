import { Head } from "@inertiajs/react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface Author {
    name: string;
    role: string;
    avatar: string;
    initials: string;
}

interface ActionCard {
    title: string;
    buttonText: string;
    buttonLink: string;
    color: string;
}

interface BlogData {
    title: string;
    author: Author;
    featuredImage: string;
    content: string[];
    actionCards: ActionCard[];
}

interface BlogProps {
    blog: BlogData;
}

export default function Blog({ blog }: BlogProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Head title={`${blog.title} - Blog`} />

            <Header />

            {/* Main Content Container */}
            <div className="container mx-auto px-6 py-12 max-w-3xl">

                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {blog.title}
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-800 rounded-full flex items-center justify-center">
                            {blog.author.avatar ? (
                                <img
                                    src={blog.author.avatar}
                                    alt={blog.author.name}
                                    className="w-full h-full rounded-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = "none";
                                        const parent = target.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `<span class="text-white text-sm font-semibold">${blog.author.initials}</span>`;
                                        }
                                    }}
                                />
                            ) : (
                                <span className="text-white text-sm font-semibold">{blog.author.initials}</span>
                            )}
                        </div>
                        <div>
                            <p className="text-gray-900 dark:text-white font-medium">{blog.author.name}</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{blog.author.role}</p>
                        </div>
                    </div>
                </div>

                {/* Blog Featured Image */}
                <div className="mb-12">
                    <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                                parent.innerHTML = '<div class="w-full h-[400px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-2xl shadow-lg"><div class="text-center"><div class="text-4xl mb-2">📝</div><div class="text-sm">Blog Featured Image</div></div></div>';
                            }
                        }}
                    />
                </div>

                {/* Blog Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Lorem ipsum dolor sit amet consectetur.
                    </h2>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {blog.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {blog.actionCards.map((card, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 border border-white/30 dark:border-gray-700 ${
                                index === 0
                                    ? 'bg-[linear-gradient(131.78deg,#3B3D35_-2.99%,#DDD9D7_107.43%)] dark:bg-[linear-gradient(347.24deg,#0F93FF_-105.12%,#F5FEE6_91.01%)]'
                                    : 'bg-[linear-gradient(10.12deg,#999999_0%,#000000_96.91%)] dark:bg-[linear-gradient(90deg,#A5FDCB_0%,#CDFDE7_100%)]'
                            }`}
                        >
                            <p className="mb-4 font-medium text-white dark:text-gray-900">
                                {card.title}
                            </p>
                            <button
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/30 dark:bg-black/10 dark:hover:bg-black/20 text-white dark:text-gray-900 border border-white/40 dark:border-black/20"
                                onClick={() => window.location.href = card.buttonLink}
                            >
                                {card.buttonText}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}