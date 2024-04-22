const temp_commits = [];

module.exports = {
	types: [
	  { types: ["feat", "feature", "✨ feat"], label: "🎉 New Features" },
	  { types: ["fix", "bugfix"], label: "🐛 Bugfixes" },
	  { types: ["improvements", "enhancement"], label: "🔨 Improvements" },
	  { types: ["perf"], label: "🏎️ Performance Improvements" },
	  { types: ["build", "ci"], label: "🏗️ Build System" },
	  { types: ["refactor"], label: "🪚 Refactors" },
	  { types: ["doc", "docs"], label: "📚 Documentation Changes" },
	  { types: ["test", "tests"], label: "🔍 Tests" },
	  { types: ["style"], label: "💅 Code Style Changes" },
	  { types: ["chore"], label: "🧹 Chores" },
	  { types: ["other"], label: "Other Changes" },
	],
  
	excludeTypes: ["other"],

	renderTypeSection: function (label, commits, includeCommitBody) {
		let text = `\n## ${label}\n`;
		commits.forEach(commit => {
			temp_commits.push(commit)
			const scope = commit.scope ? `**${commit.scope}:** ` : "";
			text += `- ${scope}${commit.subject}\n`;
		});
	
		return text;
	},
	
	renderNotes: function (notes) {
		let text = `\n🚨 Breaking Changes\n`;
	
		notes.forEach(note => {
			text += `- due to [${note.commit.sha.substr(0, 6)}](${note.commit.url}): ${note.commit.subject}\n\n`;
		});
	
		return text;
	},
	
	renderChangelog: function (release, changes) {
		const now = new Date();
		return `# ${release} - ${now.toISOString().substr(0, 10)}\n\n` + changes + "\n\n" ;
	},

  };