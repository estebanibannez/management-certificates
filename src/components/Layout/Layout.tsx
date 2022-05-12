import { ReactNode } from "react";
import Header from "./Navigation/Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-full bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <Header />
      {/* <header className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-slate-600 dark:text-white mt-5 font-medium tracking-tight text-3xl">
            Certificados
          </h1>
        </div>
      </header> */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-4">
          <div className="px-4 py-6 sm:px-4">
            <div className="border-2 border-dashed border-gray-200 rounded-lg px-8 py-4">
              {children}
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default Layout;
