#!/usr/bin/env node
import prompts from 'prompts';


async function askAction() {
    const result = await prompts({
        name: 'action',
        type: 'select',
        choices: [{
            title: 'Add component',
            value: 'add_component'
        }]
    })
    return result.action;
}

async function main() {
    const action = await askAction();
    console.log('ACTION:', action)
}

main(); 