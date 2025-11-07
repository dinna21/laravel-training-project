import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/company',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CompanyController::index
 * @see app/Http/Controllers/CompanyController.php:10
 * @route '/company'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const CompanyController = { index }

export default CompanyController