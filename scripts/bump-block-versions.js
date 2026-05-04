import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Script to bump version in all block.json files
 */
async function bumpVersions() {
    const blocksPath = 'src/wp-content/themes/ai-zippy-child/src/blocks/**/block.json';
    const files = await glob(blocksPath);

    console.log(`Found ${files.length} block.json files to bump.`);

    files.forEach(file => {
        try {
            const content = JSON.parse(fs.readFileSync(file, 'utf8'));
            if (content.version) {
                const parts = content.version.split('.');
                if (parts.length === 3) {
                    // Increment patch version
                    parts[2] = parseInt(parts[2]) + 1;
                    content.version = parts.join('.');
                    
                    fs.writeFileSync(file, JSON.stringify(content, null, '\t') + '\n');
                    console.log(`Bumped ${content.name} to ${content.version}`);
                }
            }
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    });
}

bumpVersions().catch(console.error);
