Next js: The react framework for production.

adv:
    nextjs simplify process of building react app for production.

    1. file base routing
    2. pre rendering
    3. api routes
    4. support for css module
    5. authentication
    6. dev and prod build system
    
server components:
    In nextjs all components are server components by default
    Ability to read files or fetching data from data base
    Dont have the ability to use hooks or handle user interactions.

client components:
    Necessary to add "use client" at the top of the comp file.
    Dont have Ability to read files or fetching data from data base
    Ability to use hooks or handle user interactions.

cmd:
    npx create-next-app name

Routing:
    file system based routing machanism.
    rules:
        All routes must be places inside the app folder
        Every file that corresponding to routes must be named page.js or page.jsx   
        Every folder corresponding path segment in the browser url
    convection over configuration.

    params:
        function ProductItem({ params }: { params: { productId: string } }) {}
    query params:
         'use client'
          import { useSearchParams } from 'next/navigation' for query params
            const searchParams = useSearchParams();
            console.log(searchParams.get("id"))

    catch all segments:
        [...slug] 
        function Docs({ params }: { params: { slug: string[] } }) {}

    condition not found:
        import { notFound } from "next/navigation"
        notFound(); the page redirected to not-found.tsx

    file colocation:

    private folders:
        private folder indicates it's private not includes in routing system.
        prefix the folder name with underscore(_)
        the folder and all subfolder excluded from routing.

    route groups:
        Allows as to logically group our routes and project files without affecting url path segment.
        (auth) routes group syntax to avoid auth


Layouts:
    A page is UI its unique to routes.
    A Layouts is UI is shared b/w multiple pages in the app.
    
    to create a Layouts that must be named layout.js or layout.jsx   

    group layout:
        To selectively apply a layout to certain segments while leaving other unchanged.
        

Routing Metadata:
    Ensuring proper SEO is crusial for visibility and attracting users
    Next js introduced a meta data api which allow us to define meta data for each page.
    Metadata ensure the accurate and relavent information displayed when the pages are shared.
    
    congigure metadata:
        export static meta data object
        export dynamic generate metadata function.

    rules:
        Both layout.tsx or page.tsx we can able define metadata if we define in layout it applies all pages using that layout if it define in page applies only for the page.

        Metadata read in order from root level to final page level

        when the metadata in multiple places for the same routes they got combined but page metadata will replace the layout metadata if they have same properties.

        
        static:
            export const metadata={
                    title:"About"
            }
        dynamic:
            import { Metadata } from "next"
            export const generateMetadata = ({ params }: { params: { productId: string } }): Metadata => {
                    return { title: `Product ${params.productId}` }
            }

Templates:
    In next js if we write logics ex states in layout its shared to all of the pages if we navigate b/w the pages the states is preserverd that is default behaviour if we want to change the behaviour we can able to use templates.

    Templates are similar to layouts in that they wrab each child layout or pages.

    The template file supposed to create in the name of template.js or template.jsx 

    similar to layout template will receive children prob which will render the nested routes.

Loading UI:
    This file is allow us to create a loading state that are displayed the user while specific route segment content is loading.

    loading.tsx or loading.js

Error handling:
    error.tsx or error.js

    Automatically wrap nested route segment in the error boundary.

    Isolate the error affected segments while keep the rest of the application functional.


Component hierarchy:

    <Layout>
        <Template>
            <ErrorBoundary fallback={<Error/>}>
                <Suspense fallback={<Loading/>}>
                     <ErrorBoundary fallback={<NotFound/>}>
                        <Page/>
                     </ErrorBoundary>
                <Suspense >
            </ErrorBoundary>
        </Template>
    </Layout>

Parallel routes:
    paraller routes are advanced routing mechanism that allows for the simultaneous rendering of multiple pages in the same layout.

    paraller routes in next.js are defined using the feature know as slots.
    slot help structure our content in a modular fashion.
    to define slot we use "@folder" naming convention.
    each slots is then passed as a prop to the corresponding layout.tsx.

    we can able to achieve this directly using components what is the benefit of paraller routes.
        . Split the single layout into various slot makes code more managable
        . Independent route handling
        . Sub navigation

        Independent route handling:
            Each slots of our layout can have its own error and loading state.
            Its helpful the scenarios like different section of the page load varing speed or encounter unique error.
        Sub navigation
            Each slot in our dashboard can essentially function as mini app complete with its own navigation and state      management.
            
