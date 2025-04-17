const fs = require('fs');
const path = require('path');

// ================= 配置部分 =================
const MIRRORS = [  // 多个镜像地址模板
  'https://gh-proxy.com/$1://github.com',
  //'https://ghproxy.net/$1://github.com',
  //'https://gitclone.com/$1://github.com'
];

const RAW_MIRRORS = [  // Raw文件专用镜像
 // 'https://gh-proxy.com/$1://raw.githubusercontent.com',
  //'https://raw.fastgit.org',
  'https://raw.gitmirror.com'
];

const TARGET_DIR = './';
const FILE_EXTENSIONS = ['.md', '.txt', '.js', '.html', '.css', '.json'];
const DRY_RUN = false;
// ===========================================

// 链接匹配正则表达式
const REGEX_MAP = {
  GITHUB: /(https?):\/\/github\.com/g,
  RAW: /(https?):\/\/raw\.githubusercontent\.com/g,
  GITHUB_RAW: /https?:\/\/github\.com\/(.*?)\/raw\/(.*)/g
};

function getRandomMirror(type = 'normal') {
  const pool = type === 'raw' ? RAW_MIRRORS : MIRRORS;
  return pool[Math.floor(Math.random() * pool.length)];
}

function replaceUrls(content) {
  // 替换普通仓库链接
  let output = content.replace(REGEX_MAP.GITHUB, (match, protocol) => {
    const mirror = getRandomMirror('normal');
    return mirror.replace('$1', protocol);
  });

  // 替换raw文件链接（两种形式）
  output = output.replace(REGEX_MAP.RAW, (match, protocol) => {
    const mirror = getRandomMirror('raw');
    return mirror.startsWith('http') ? 
      mirror.replace('$1', protocol) : 
      `${mirror}/${protocol}://raw.githubusercontent.com`;
  });

  // 替换 github.com/.../raw/... 形式的链接
  output = output.replace(REGEX_MAP.GITHUB_RAW, (match, userRepo, path) => {
    const mirror = getRandomMirror('raw');
    const [user, repo] = userRepo.split('/');
    return mirror.includes('$1') ? 
      `${mirror}/${user}/${repo}/${path}` :
      `${mirror}/${user}/${repo}/${path}`;
  });

  return output;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = replaceUrls(content);
    
    if (content !== newContent) {
      console.log(`\nUpdated ${filePath}`);
      console.log('----------------------------------------');
      console.log(newContent.split('\n').filter((line, i) => 
        content.split('\n')[i] !== line
      ).join('\n'));
      
      if (!DRY_RUN) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('✅ File updated');
      }
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// 遍历目录函数保持不变...
function traverseDirectory(directory) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        
        if (entry.isDirectory()) {
            traverseDirectory(fullPath);
        } else if (
            entry.isFile() && 
            FILE_EXTENSIONS.includes(path.extname(entry.name).toLowerCase())
        ) {
            processFile(fullPath);
        }
    }
}

// 启动信息
console.log(`GitHub Mirror Replacement Tool (DRY RUN: ${DRY_RUN})`);
console.log('Available mirrors:');
console.log('Normal:', MIRRORS);
console.log('Raw:', RAW_MIRRORS);
console.log(`Processing: ${path.resolve(TARGET_DIR)}\n`);

traverseDirectory(TARGET_DIR);