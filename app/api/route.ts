//! data teka json file 

// import data from './dataraw.json';

// export async function GET() {
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }


  import fs from 'fs';
  import yaml from 'js-yaml';

  // Fungsi kanggo ngunggah lan ngowahi file YAML dadi objek JavaScript
const loadYamlFile = (filePath: string): any => {
    try {
      // Waca konten file YAML
      const fileContents = fs.readFileSync(filePath, 'utf8');
      // Parsing konten YAML dadi objek JavaScript
      const data = yaml.load(fileContents);
      return data;
    } catch (error) {
      console.error('Error loading YAML file:', error);
      return null;
    }
  };
  
  // Jalankan fungsi lan cetak hasilé
  const data = loadYamlFile('./constant/dataBio.yaml');

  export async function GET() {
    // Priksa manawa data ora null sadurunge ngirim respon
    if (data === null) {
        return new Response('Kesalahan nalika maca file YAML', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain',
            },
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

  // console.log(data);




  

// export default function handler(req, res) {
//   res.status(200).json(dataRaw);
// }


export async function POST(request: Request) {
    try {
      const text = await request.text()
      // Ngolah payload webhook
    } catch (error: any) {
      return new Response(`Kesalahan webhook: ${error?.message}`, {
        status: 400,
      })
    }
    return new Response('Success!', {
      status: 200,
    })
  }