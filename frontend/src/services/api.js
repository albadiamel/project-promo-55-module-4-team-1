export const getProjects = () => {
    return fetch("http://localhost:3000/projects")
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
                    image: item.projectImage
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
                    image: item.projectImage
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