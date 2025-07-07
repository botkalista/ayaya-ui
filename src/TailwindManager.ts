
import fs from 'fs';

const paths = [
    './tailwind.config.js',
    './tailwind.config.ts'
]

export function findTailwindConfig() {
    for (const e in paths) {
        if (fs.existsSync(e)) return e;
    }
}