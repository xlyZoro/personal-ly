import HomePage from "@/views/HomePage/HomePage";
// import Home from "@/views/home";
import { createBrowserRouter } from "react-router-dom";
// import type {
//   LoaderFunctionArgs,
//   Form,
//   Link,
//   Outlet,
//   RouterProvider,
//   redirect,
//   useActionData,
//   useFetcher,
//   useLocation,
//   useNavigation,
//   useRouteLoaderData,
// } from "react-router-dom";
const Router = createBrowserRouter([
//   {
//     id: "root",
//     path: "/",
//     loader() {
//       // Our root route always provides the user, if logged in
//       return { user: fakeAuthProvider.username };
//     },
//     Component: Layout,
//     children: [
//       {
//         index: true,
//         Component: PublicPage,
//       },
//       {
//         path: "login",
//         action: loginAction,
//         loader: loginLoader,
//         Component: LoginPage,
//       },
//       {
//         path: "protected",
//         loader: protectedLoader,
//         Component: ProtectedPage,
//       },
//     ],
//   },
//   {
//     path: "/logout",
//     async action() {
//       // We signout in a "resource route" that we can hit from a fetcher.Form
//       await fakeAuthProvider.signout();
//       return redirect("/");
//     },
//   },
// {   
//     path: "/",
//     Component:Home
// },
{
    path:"/homepage",
    Component:HomePage
}
]);

// async function loginAction({ request }: LoaderFunctionArgs) {
//   let formData = await request.formData();
//   let username = formData.get("username") as string | null;

//   // Validate our form inputs and return validation errors via useActionData()
//   if (!username) {
//     return {
//       error: "You must provide a username to log in",
//     };
//   }

//   // Sign in and redirect to the proper destination if successful.
//   try {
//     await fakeAuthProvider.signin(username);
//   } catch (error) {
//     // Unused as of now but this is how you would handle invalid
//     // username/password combinations - just like validating the inputs
//     // above
//     return {
//       error: "Invalid login attempt",
//     };
//   }

//   let redirectTo = formData.get("redirectTo") as string | null;
//   return redirect(redirectTo || "/");
// }

// async function loginLoader() {
//     if (fakeAuthProvider.isAuthenticated) {
//       return redirect("/");
//     }
//     return null;
//   }
//   function protectedLoader({ request }: LoaderFunctionArgs) {
//     // If the user is not logged in and tries to access `/protected`, we redirect
//     // them to `/login` with a `from` parameter that allows login to redirect back
//     // to this page upon successful authentication
//     if (!fakeAuthProvider.isAuthenticated) {
//       let params = new URLSearchParams();
//       params.set("from", new URL(request.url).pathname);
//       return redirect("/login?" + params.toString());
//     }
//     return null;
//   }
  
//   function ProtectedPage() {
//     return <h3>Protected</h3>;
//   }


export default Router