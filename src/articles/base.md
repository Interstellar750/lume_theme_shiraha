---
title: 基本设置
date: '2024-01-16'
image: https://trle5.xyz/about/testagain/test.webp
url: /base/
summary: 这个项目中有哪些可用的设置
tags:
  - base
  - test
flags:
  - unlisted
---

目前这是一个测试站点，用来了解该项目的一些设置

## Frontmatter 文档属性

可参考：[FFF Flavored Frontmatter](https://fff.js.org/)

```md
---
title: 基本设置 # 标题
date: '2024-01-16' # 日期
image: https://trle5.xyz/about/testagain/test.webp # 图片链接，目前用于背景取色
url: /base/ # 自定义文章的 URL，可堆叠，开头和末尾均需要使用 / 符号
summary: 这个项目中有哪些可用的设置 # 文章概括
tags: # 标签
  - base
  - test
flags: # 标记
  - unlisted # 不在文章列表中显示此文章，目前不起作用
---
```

隐藏文章现可生效，但需要在 tags 中指定 unlisted 而不是在 flags 指定，后面应该会修改

## 文件结构

省略了一些文件

```bash
.
├── plugins
│   └── lts
│       └── data.ts # 站点信息
└── src
    ├── articles # 存放文章的文件夹
    │   ├── base.md # Markdown 格式文章
    │   ├── _data.yml # 指示该文件夹作用
    └── _components
        ├── container.tsx # 主要容器
        ├── footer.tsx # 页脚
        ├── header.tsx # 标题栏
        ├── head.tsx # HTML 头部
        └── tags.tsx # 标签
```

## URL 可用性

**`/`**  首页

**`/articles/`**  默认的文章列表

**`/t/`**  标签页面，暂不可用

**`/p/`** 文章分页，文章数大于 5 则分页，目前需要手动访问

## 元素

可能并没有列出所有元素

### 文本类

超链接：[首页](/)

上标文字：<sup>这是上标文字</sup>

下标文字：<sub>这是下标文字</sub>

缩写解释：<abbr title="Chromium OS Universal Chroot Environment"><a href="https://github.com/dnschneid/crouton?tab=readme-ov-file#croutonan-acronym" target="_blank" >crouton</a></abbr>（将光标停留在文字上以查看完整解释）

按键展示：在 Windows 上按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> 以打开任务管理器

### 代码块

```c
#include <stdio.h>

int main(void)
{
    printf("Hello World!\n");
    return 0;
}
```

### 表格

| 靠左对齐 | 居中对齐 | 靠右对齐 | 无设置 |
| :------- | :------: | -------: | ------ |
|   子项   |   子项   |   子项   |  子项  |
|   子项   |   子项   |   子项   |  子项  |

### 数字列表

1. 项目 1
2. 项目 2

### 无序列表

- 无序项目 1
- 无序项目 2

### 检查列表

1. [ ] 未确认的项目
2. [x] 已确认的项目

- [ ] 未确认的无序项目
- [x] 已确认的无序项目
  - [ ] 未确认的无序子项目
  - [x] 已确认的无序子项目

### 脚注

这是一个脚注，点击右侧超链接来跳到底部查看 [^1]

[^1]: 这是脚注的内容，点击右侧图标返回正文的脚注处

### 图片

```
![](https://images.unsplash.com/photo-1632683353128-1d02d43cfdd4)
```

![](https://images.unsplash.com/photo-1632683353128-1d02d43cfdd4)

### 可点击的图片

```
[![Photo by Holly Greene](https://images.unsplash.com/photo-1632683353128-1d02d43cfdd4)](https://unsplash.com/photos/a-close-up-of-a-snowflake-on-a-blue-background-wD6dXl47YlQ)
```

[![Photo by Holly Greene](https://images.unsplash.com/photo-1632683353128-1d02d43cfdd4)](https://unsplash.com/photos/a-close-up-of-a-snowflake-on-a-blue-background-wD6dXl47YlQ)

### `<iframe>` 嵌入

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0zd85tWDnoCH1r3tYLTnXQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
