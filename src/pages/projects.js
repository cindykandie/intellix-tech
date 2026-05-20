import Layout from '@/components/Layout';
import ProjectNav from '@/components/ProjectNav';
import Link from 'next/link';
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <section className="flex flex-col items-center my-5">
          <h1 className="mt-8 text-4xl font-bold text-color-change">Try Out Our Products Today!</h1>

          <ProjectNav />

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 m-3 project-wrapper">
            {projects.projects.map((project) => (
              <div key={project.title} className="bg-purple-200 font-black rounded-md shadow-md flex flex-col justify-between mx-3 w-[100%] max-w-[450px]">
                <div className="relative image-wrapper">
                  <img
                    className="rounded-t-lg h-72 object-cover p-3 w-[100%]"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-800 text-base mb-4">{project.description}</p>
                  <div className="flex btn-container gap-2">
                    {project.isInternal ? (
                      <Link href={project.liveSiteLink}>
                        <button className='border border-purple-600 rounded px-4 py-1.5 bg-purple-500 text-white text-sm font-semibold transition-all duration-200 hover:bg-purple-600 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 active:bg-purple-700'>
                          View
                        </button>
                      </Link>
                    ) : (
                      <a href={project.liveSiteLink} target='blank'>
                        <button className='border border-purple-600 rounded px-4 py-1.5 bg-purple-500 text-white text-sm font-semibold transition-all duration-200 hover:bg-purple-600 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 active:bg-purple-700'>
                          View
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}