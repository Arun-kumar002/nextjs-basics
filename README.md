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