<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display a listing of blogs.
     */
    public function index(): Response
    {
        $blogs = Blog::with('user')
            ->latest()
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'description' => $blog->description,
                    'author' => $blog->author_name ?? $blog->user->name,
                    'date' => $blog->formatted_date,
                    'status' => $blog->status,
                    'featured_image' => $blog->featured_image,
                ];
            });

        return Inertia::render('admin/blogs/index', [
            'blogs' => $blogs,
        ]);
    }

    /**
     * Show the form for creating a new blog.
     */
    public function create(): Response
    {
        return Inertia::render('admin/blogs/create');
    }

    /**
     * Store a newly created blog.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'required|string',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'author_name' => 'nullable|string|max:255',
            'author_role' => 'nullable|string|max:255',
            'author_avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'status' => 'required|in:draft,published',
        ]);

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('blogs', 'public');
        }

        // Handle author avatar upload
        if ($request->hasFile('author_avatar')) {
            $validated['author_avatar'] = $request->file('author_avatar')->store('avatars', 'public');
        }

        $validated['user_id'] = auth()->id();

        Blog::create($validated);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog created successfully!');
    }

    /**
     * Show the form for editing the specified blog.
     */
    public function edit(Blog $blog): Response
    {
        return Inertia::render('admin/blogs/edit', [
            'blog' => [
                'id' => $blog->id,
                'title' => $blog->title,
                'description' => $blog->description,
                'content' => $blog->content,
                'featured_image' => $blog->featured_image,
                'author_name' => $blog->author_name,
                'author_role' => $blog->author_role,
                'author_avatar' => $blog->author_avatar,
                'status' => $blog->status,
            ],
        ]);
    }

    /**
     * Update the specified blog.
     */
    public function update(Request $request, Blog $blog): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content' => 'required|string',
            'featured_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'author_name' => 'nullable|string|max:255',
            'author_role' => 'nullable|string|max:255',
            'author_avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'status' => 'required|in:draft,published',
        ]);

        // Handle featured image upload
        if ($request->hasFile('featured_image')) {
            // Delete old image
            if ($blog->featured_image) {
                Storage::disk('public')->delete($blog->featured_image);
            }
            $validated['featured_image'] = $request->file('featured_image')->store('blogs', 'public');
        }

        // Handle author avatar upload
        if ($request->hasFile('author_avatar')) {
            // Delete old avatar
            if ($blog->author_avatar) {
                Storage::disk('public')->delete($blog->author_avatar);
            }
            $validated['author_avatar'] = $request->file('author_avatar')->store('avatars', 'public');
        }

        $blog->update($validated);

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog updated successfully!');
    }

    /**
     * Remove the specified blog.
     */
    public function destroy(Blog $blog): RedirectResponse
    {
        // Delete associated images
        if ($blog->featured_image) {
            Storage::disk('public')->delete($blog->featured_image);
        }
        if ($blog->author_avatar) {
            Storage::disk('public')->delete($blog->author_avatar);
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')
            ->with('success', 'Blog deleted successfully!');
    }

    // Display the latest blog in the public blog page
    public function latest(): Response
    {
        $latestBlog = Blog::with('user')
            ->latest()
            ->first();

        if (!$latestBlog) {
            return Inertia::render('Blog', [
                'blog' => null,
            ]);
        }

        return Inertia::render('Blog', [
            'blog' => [
                'id' => $latestBlog->id,
                'title' => $latestBlog->title,
                'description' => $latestBlog->description,
                'content' => $latestBlog->content,
                'author' => $latestBlog->author_name ?? $latestBlog->user->name,
                'author_name' => $latestBlog->author_name,
                'author_role' => $latestBlog->author_role,
                'author_avatar' => $latestBlog->author_avatar,
                'date' => $latestBlog->created_at->format('M d, Y'),
                'featured_image' => $latestBlog->featured_image,
                'status' => $latestBlog->status,
            ],
        ]);
    }

}