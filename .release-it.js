module.exports = {
    git: {
        commitMessage: "chore: release v${version}",
        tagName: "v${version}",
        tagAnnotation: "v${version}"
    },
    github: {
        release: true,
        releaseName: "v${version}"
    },
    npm: {
        publish: true
    }
};
