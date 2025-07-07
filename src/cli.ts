#!/usr/bin/env node
import prompts from 'prompts';
import fs from 'fs-extra';
import { join } from 'path';
import { findTailwindConfig } from './TailwindManager';


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

    if (action === 'create_configuration') {
        const configPath = findTailwindConfig();
        if (configPath) {
            console.log('Tailwind config file detected.');
            console.log('To use ayaya-ui styles merge this into your config:');
            console.log('');
            console.log(fs.readFileSync(join(__dirname, `../app/tailwind.config.ts`)))
            console.log('');
        }
        fs.copyFileSync(
            join(__dirname, `../app/tailwind.config.ts`),
            './tailwind.config.ts'
        );
        console.log('Configuration created.');
        return;
    }

    if (action === 'add_component') {
        const component = await selectComponent();
        fs.ensureDirSync(`./components/ayaya-ui`);
        fs.copyFileSync(join(__dirname, `../app/components/${component}.vue`), `./components/ayaya-ui/${component}.vue`);
        console.log(component, 'created.');
        return;
    }

}

main(); 