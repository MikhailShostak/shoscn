import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMDXFiles(dir: string) {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter((file) => file.endsWith('.mdx'));
}

export function getAllMDXSlugs(dir: string) {
  const files = getMDXFiles(dir);
  return files.map((file) => file.replace(/\.mdx$/, ''));
}
