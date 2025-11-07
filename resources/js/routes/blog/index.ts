import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
export const latest = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: latest.url(options),
    method: 'get',
})

latest.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
latest.url = (options?: RouteQueryOptions) => {
    return latest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
latest.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: latest.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
latest.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: latest.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
    const latestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: latest.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
        latestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: latest.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BlogController::latest
 * @see app/Http/Controllers/Admin/BlogController.php:172
 * @route '/blog'
 */
        latestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: latest.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    latest.form = latestForm
/**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
export const show = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blog/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
show.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: args.blog,
                }

    return show.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
show.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
show.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
    const showForm = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
        showForm.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BlogController::show
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blog/{blog}'
 */
        showForm.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const blog = {
    latest: Object.assign(latest, latest),
show: Object.assign(show, show),
}

export default blog