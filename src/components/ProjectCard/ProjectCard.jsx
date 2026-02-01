import { useEffect, useState } from "react";
import { getRepos } from "../../services/githubService"

const ProjectCard = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getRepos().then(response => setRepos(response.data));
    }, []);

    return (
            <>
            {repos.map((projeto) => (
                <div key={projeto.id} className="border-1 border-danger w-full h-full flex px-4 bg-gray text-gray-300 p-20 text-center justify-center">
                    <div className='w-1/2 border'>
                        <img src="#" alt="Project Image" />
                    <h2>Project</h2>
                </div>
                </div>
            ))}
                
                
                <div className='w-1/2 border px-8 py-4'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, autem enim, eligendi eius culpa officia doloribus natus quaerat eveniet recusandae sequi! Sequi aliquam ex consequuntur quas eligendi accusamus, aut facilis?</p>
                    <div className='flex justify-start gap-5'>
                        <div>
                            <i></i>
                            <p>Stack 1</p>
                        </div>
                        <div>
                            <i></i>
                            <p>Stack 2</p>
                        </div>
                        <div>
                            <i></i>
                            <p>Stack 3</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <button>github</button>
                        <button>web</button>
                    </div>
                </div>
            
        </>
    )
}

export default ProjectCard