#!/usr/bin/env node
import prompts from 'prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function askAction() {
    const result = await prompts({
        name: 'action',
        type: 'select',
        message: 'Select an action',
        choices: [{
            title: 'Add component',
            value: 'add_component'
        }]
    })
    return result.action;
}

async function selectComponent() {
    const result = await prompts({
        name: 'component',
        type: 'select',
        message: 'Select a component',
        choices: [{
            title: 'Button',
            value: 'Button'
        }]
    })
    return result.component;
}

async function main() {
    const action = await askAction();


    if (action === 'add_component') {
        const component = await selectComponent();
        fs.ensureDirSync( `./components/ayaya-ui`);
        fs.copyFileSync(
            join(__dirname, `../components/${component}.vue`),
            `./components/ayaya-ui/${component}.vue`
        );
        console.log(component, 'created.');
    }

}

main(); 