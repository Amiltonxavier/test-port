import { CheckCircle, ChevronRight, Megaphone, SearchCode } from "lucide-react";
import { Link } from "react-router-dom";
import { FAQ } from "../../components/faq";

{/* <div>
          <h3>Logo</h3>
        </div>
        <ul>
            <li><a href="">Services<a></li>
            <li><a href="">Services<a></li>
            <li><a href="">Services<a></li>
            <li><a href="">Services<a></li>
        </ul>
        <div>
          <button>Entrar</button>
        </div> */}


export default function Home() {
  return (
    <main className="min-h-screen w-full mb-20">
      <div className=" relative space-y-16">
        <div className="h-screen space-y-20 px-8">
          <nav className=" top-8 w-full flex items-center justify-between gap-4 p-4 rounded-lg shadow-2xl bg-white">
            <div>
              <h2>Logo</h2>
            </div>
            <ul className="flex items-center gap-3">
              <li><Link to="">Services</Link></li>
              <li><Link to="">Services</Link></li>
              <li><Link to="">Services</Link></li>
              <li><Link to="">Services</Link></li>
            </ul>
            <div>
              <button className="rounded-full px-4 py-2 border ">Entrar</button>
            </div>
          </nav>


          <section className="space-y-10 px-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-6">
                <div className="space-y-6 max-w-[600px]">
                  <span className="font-mono text-emerald-500 space-x-3"> <span className="border-l-2 border-emerald-500 inline-block" />Marking Toolking</span>
                  <h1 className="text-6xl font-bold tracking-tight leading-tight">
                    Mastering Proven<br /> Strategies that Drive<br /> Real Result
                  </h1>
                  <p className="text-zinc-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae delectus repellendus hic, laborum quia dolorum? Repellat similique
                    voluptatum commodi, explicabo quasi suscipit sed maxime alias, tempora molestiae ullam incidunt.
                  </p>
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 bg-emerald-500 text-white px-8 py-3 font-semibold rounded-full">
                      Denúnciar <Megaphone />
                    </button>
                    <button className="flex items-center gap-2 border text-zinc-700 px-8 py-3 font-semibold rounded-full">
                      Denúnciar <SearchCode />
                    </button>
                  </div>
                </div>



                {/* <div className="mt-4 max-w-[300px] flex flex-wrap gap-4 items-center text-zinc-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-500 size-5" /><span className="font-semibold text-sm">Anonimo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-500 size-5" /><span className="font-semibold text-sm">Seguro fvnfvnfvnj</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-500 size-5" /><span className="font-semibold text-sm">Confiavél</span>
                  </div>
                </div> */}
              </div>
              <div>
                <img className="h-full rounded-lg" src="https://images.unsplash.com/photo-1604881989793-466aca8dd319?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>

          </section>
        </div>

        {/* 
        <section className="space-y-16">
          <h2 className="text-3xl tracking-tight font-bold">Porque denúnciar</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-zinc-100 p-6 rounded-md">
              <p className="text-zinc-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit autem, id, commodi non laboriosam eum perspiciatis sunt sint tenetur, at expedita!
                Possimus officiis assumenda tempora minima reprehenderit animi consequuntur excepturi.
              </p>
              <span className="font-semibold text-zinc-700">Segurança</span>
            </div>
            <div className="bg-zinc-100 p-6 rounded-md">
              <p className="text-zinc-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit autem, id, commodi non laboriosam eum perspiciatis sunt sint tenetur, at expedita!
                Possimus officiis assumenda tempora minima reprehenderit animi consequuntur excepturi.
              </p>
              <span className="font-semibold text-zinc-700">Segurança</span>
            </div>
            <div className="bg-zinc-100 p-6 rounded-md">
              <p className="text-zinc-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit autem, id, commodi non laboriosam eum perspiciatis sunt sint tenetur, at expedita!
                Possimus officiis assumenda tempora minima reprehenderit animi consequuntur excepturi.
              </p>
              <span className="font-semibold text-zinc-700">Segurança</span>
            </div>
            <div className="bg-zinc-100 p-6 rounded-md">
              <p className="text-zinc-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit autem, id, commodi non laboriosam eum perspiciatis sunt sint tenetur, at expedita!
                Possimus officiis assumenda tempora minima reprehenderit animi consequuntur excepturi.
              </p>
              <span className="font-semibold text-zinc-700">Segurança</span>
            </div>

          </div>
        </section> */}

        <section>
          <div className="grid grid-cols-4 gap-4">

          </div>
        </section>
        <section className="spacey-y-8">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-bold">Perguntas frequentes</h2>
            <span className="text-zinc-700 font-medium text-xl">
              Tudo que precisas saber sobre o Portal de denúncias
            </span>
          </div>
          <FAQ />
        </section>
      </div>
    </main>
  )
}
