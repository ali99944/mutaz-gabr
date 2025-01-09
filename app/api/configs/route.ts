import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    console.log(key);

    const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8');
    const configData = JSON.parse(configFile);

    if (!key) {
        return NextResponse.json({ configs: configData });
    }

    const keys = key.split(',');
    const values: Record<string, string> = {};

    for (const k of keys) {
        if (k in configData) {
            values[k] = configData[k];
        } else {
            values[k] = 'not-found';
        }
    }

    return NextResponse.json(values);
}

export async function POST (request: Request) {
    const { key, value } = await request.json()
    const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
    const configData = JSON.parse(configFile)

    if (!(key in configData)) {
        configData[key] = value
        fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
        return NextResponse.json({ [key]: value, success: true })
    }

    return NextResponse.json({ success: false, error: `The key '${key}' already exists in the config file.` }, { status: 400 })
}

export async function PATCH (request: Request) {
    const { key, value } = await request.json()
    const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
    const configData = JSON.parse(configFile)

    if (key in configData) {
        configData[key] = value
        fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
        return NextResponse.json({ [key]: value, success: true })
    }

    return NextResponse.json({ success: false, error: `The key '${key}' doesn't exist in the config file.` }, { status: 400 })
}

export async function DELETE (request: Request) {
    const { key } = await request.json()
    const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
    const configData = JSON.parse(configFile)

    if (key in configData) {
        delete configData[key]
        fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
        return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, error: `The key '${key}' doesn't exist in the config file.` }, { status: 400 })
}

