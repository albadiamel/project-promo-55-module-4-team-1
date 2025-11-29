export const getProjects = () => {
    return fetch("http://localhost:3000/projects")
        .then((response) => response.json())
        .then((data) => {
            console.log("datos de la API", data);
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    project: item.nameProj,
                    description: item.description,
                    techs: item.techs,
                    slogan: item.slogan,
                    demo: item.demo,
                    repo: item.repo,
                    image: item.projectImage,
                    idAuthor: item.id_author,
                    author: item.owner,
                    job: item.jobTitle,
                    authorImage: item.authorImage
                };
            });

            return cleanData;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getProjectById = (id) => {
        return fetch(`http://localhost:3000/project/${id}`)
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    project: item.nameProj,
                    description: item.description,
                    techs: item.techs,
                    slogan: item.slogan,
                    demo: item.demo,
                    repo: item.repo,
                    image: item.projectImage,
                    idAuthor: item.id_author,
                    author: item.owner,
                    job: item.jobTitle,
                    authorImage: item.authorImage
                };
            });

            return cleanData[0];
        })
        .catch((error) => {
            console.log(error);
        });
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
        .catch((error) => {
            console.log(error);
        });
};