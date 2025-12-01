export const getProjects = () => {
    return fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
};

export const getProjectById = (id) => {
        return fetch(`http://localhost:3000/project/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    nameProj: item.nameProj,
                    description: item.description,
                    techs: item.techs,
                    slogan: item.slogan,
                    demo: item.demo,
                    repo: item.repo,
                    projectImage: item.projectImage,
                    id_author: item.id_author,
                    owner: item.owner,
                    jobTitle: item.jobTitle,
                    authorImage: item.authorImage
                };
            });

            return cleanData[0];
        })
};

export const addProjects = (data) => {
    return fetch("http://localhost:3000/add-project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(() => {
            return;
        })
};