import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  return (
    <>
      <div className="faq-section max-w-6xl mx-auto mt-10">
        {
          Array.from({ length: 6 }).map((_, index) => (
            <details className="border-b border-gray-200 py-6 group">
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg font-medium">
                <span className='text-zinc-700'>Como criar um acordeão?</span>
                <ChevronDown className="group-open:hidden w-5 h-5 text-gray-500" />
                <ChevronUp className="hidden group-open:block w-5 h-5 text-gray-500" />
              </summary>
              <div className="mt-2 text-gray-600">
                As tags <code>&lt;details&gt;</code> e <code>&lt;summary&gt;</code> são perfeitas para isso.
              </div>
            </details>
          ))
        }

      </div>
    </>

  );
};

