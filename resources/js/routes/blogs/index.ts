import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
export const publicMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})

publicMethod.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
publicMethod.url = (options?: RouteQueryOptions) => {
    return publicMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
publicMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
publicMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
    const publicMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: publicMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
        publicMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: publicMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\BlogController::publicMethod
 * @see app/Http/Controllers/Admin/BlogController.php:0
 * @route '/blogs'
 */
        publicMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: publicMethod.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    publicMethod.form = publicMethodForm
const blogs = {
    public: Object.assign(publicMethod, publicMethod),
}

export default blogs