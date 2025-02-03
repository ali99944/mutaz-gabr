// import fs from 'fs'
// import { NextResponse } from 'next/server'

// export async function GET (request: Request) {
//     const { searchParams } = new URL(request.url);
//     const key = searchParams.get('key');

//     console.log(key);

//     const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8');
//     const configData = JSON.parse(configFile);

//     if (!key) {
//         return NextResponse.json({ configs: configData });
//     }

//     const keys = key.split(',');
//     const values: Record<string, string> = {};

//     for (const k of keys) {
//         if (k in configData) {
//             values[k] = configData[k];
//         } else {
//             values[k] = 'not-found';
//         }
//     }

//     return NextResponse.json(values);
// }

// export async function POST (request: Request) {
//     const { key, value } = await request.json()
//     const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
//     const configData = JSON.parse(configFile)

//     if (!(key in configData)) {
//         configData[key] = value
//         fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
//         return NextResponse.json({ [key]: value, success: true })
//     }

//     return NextResponse.json({ success: false, error: `The key '${key}' already exists in the config file.` }, { status: 400 })
// }

// export async function PATCH (request: Request) {
//     const { key, value } = await request.json()
//     const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
//     const configData = JSON.parse(configFile)

//     if (key in configData) {
//         configData[key] = value
//         fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
//         return NextResponse.json({ [key]: value, success: true })
//     }

//     return NextResponse.json({ success: false, error: `The key '${key}' doesn't exist in the config file.` }, { status: 400 })
// }

// export async function DELETE (request: Request) {
//     const { key } = await request.json()
//     const configFile = fs.readFileSync('app/api/configs/website-configs.json', 'utf-8')
//     const configData = JSON.parse(configFile)

//     if (key in configData) {
//         delete configData[key]
//         fs.writeFileSync('app/api/configs/website-configs.json', JSON.stringify(configData, null, 2))
//         return NextResponse.json({ success: true })
//     }

//     return NextResponse.json({ success: false, error: `The key '${key}' doesn't exist in the config file.` }, { status: 400 })
// }


import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const configPath = path.join(process.cwd(), 'app/api/configs/configs.json')



export async function POST(req: Request) {
  try {
    const data = await req.json()
    await fs.writeFile(configPath, JSON.stringify(data, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: 'Failed to update config' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  try {
    const configData = await fs.readFile(configPath, 'utf8')
    const data = JSON.parse(configData)
    if (!key) {
      return NextResponse.json(data);
    }

    const keys = key.split(',');
    const values: Record<string, unknown> = {};

    for (const k of keys) {
      if (k in data) {
        values[k] = data[k];
      } else {
        values[k] = 'not-found';
      }
    }

    return NextResponse.json(values);
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: 'Failed to read config' }, { status: 500 })
  }
}

