
import glob from 'fast-glob'
import { join } from 'path'
export const getEntryPath = () => {
    const pageEntry = {}
    glob.sync("**/index.html").forEach((entry) => {
      const pathArr = entry.split("/");
      const name = pathArr[pathArr.length - 2];
      pageEntry[name] = join(process.cwd(), `/src/pages/${name}/index.html`)
    })
    delete pageEntry.pages
    return pageEntry // 整体效果如下图
  }
  getEntryPath()