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
    },
    plugins: {
        "@release-it/conventional-changelog": {
            preset: "angular",
            infile: "CHANGELOG.md"
        }
    }
};
