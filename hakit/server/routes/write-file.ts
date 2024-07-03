import { Request, Response } from 'express';
import { join } from 'path';
import { writeFile as fsWriteFile } from 'fs/promises';

export async function writeFile(req: Request, res: Response) {
  try {
    const { filename, content } = req.body;

    if (!filename || !content) {
      return res.status(400).send('Filename and content are required.');
    }

    const filePath = join(process.cwd(), filename);
    const fileContents = typeof content === 'string' ? content : JSON.stringify(content, null, 2);

    await fsWriteFile(filePath, fileContents, 'utf8');
    
    res.status(200).send('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error);
    res.status(500).send('Error writing file');
  }
}