const fs = require("fs");

const config = JSON.parse(fs.readFileSync("protokin.config.json", "utf-8"));
const nodes = config.nodes;

/* -----------------------------
   SIDEBAR
------------------------------*/
function generateSidebar() {
    let md = "# PROTOKIN\n\n- [Accueil](README.md)\n\n---\n\n";

    for (const [name, node] of Object.entries(nodes)) {
        md += `## ${name}\n`;
        md += `- [${name}](${node.file})\n`;

        node.links.forEach(link => {
            if (nodes[link]) {
                md += `  - ↳ [${link}](${nodes[link].file})\n`;
            }
        });

        md += "\n";
    }

    fs.writeFileSync("_sidebar.md", md);
}

/* -----------------------------
   INDEX GLOBAL
------------------------------*/
function generateIndex() {
    let md = "# INDEX PROTOKIN\n\n";

    for (const [name, node] of Object.entries(nodes)) {
        md += `- **[${name}](${node.file})** — tags: ${node.tags.join(", ")}\n`;
    }

    fs.writeFileSync("index.md", md);
}

/* -----------------------------
   CARTOGRAPHIE MERMAID
------------------------------*/
function generateCartography() {
    let md = "# CARTOGRAPHIE PROTOKIN\n\n";
    md += "```mermaid\ngraph TD\n";

    for (const [name, node] of Object.entries(nodes)) {
        node.links.forEach(target => {
            md += `  ${name} --> ${target}\n`;
        });
    }

    md += "```\n";

    fs.writeFileSync("cartographie.md", md);
}

/* -----------------------------
   CROSS-LINKS AUTOMATIQUES
------------------------------*/
function injectCrossLinks() {
    for (const [name, node] of Object.entries(nodes)) {

        let content = "";

        try {
            content = fs.readFileSync(node.file, "utf-8");
        } catch (e) {
            content = `# ${name}\n\n(TODO: contenu à écrire)\n`;
        }

        let links = node.links.map(l => {
            if (!nodes[l]) return "";
            return `- Voir aussi : [${l}](${nodes[l].file})`;
        }).join("\n");

        if (links) {
            content += `\n\n---\n\n## Liens internes\n\n${links}\n`;
        }

        fs.writeFileSync(node.file, content);
    }
}

/* -----------------------------
   BUILD
------------------------------*/
generateSidebar();
generateIndex();
generateCartography();
injectCrossLinks();

console.log("✔ PROTOKIN build terminé");
