module.exports = {
  branches: ["master"],
  repositoryUrl: "https://github.com/renatorrocha/semantic-release-boilerplate",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],
  ],
};
