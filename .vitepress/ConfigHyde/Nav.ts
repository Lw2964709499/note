// nav导航栏配置
import {
  TeekIcon,
  VdoingIcon,
  SSLIcon,
  BlogIcon,
  LinuxIcon,
  NginxIcon,
  GitIcon,
  DockerIcon,
  AppstoreIcon,
  PhotoIcon,
  MusicIcon,
  FilmIcon,
  AboutIcon,
  LinkIcon,
  NavIcon,
  SiteAnalyticsIcon,
  StatusIcon,
} from "./icon/NavIcon";
export const Nav= [
  {
    text: "🏡首页",
    link: "/"
  },
  {
    text: "🏙️生活娱乐",
    items: [
      {
        component: "NavIcon",
        props: PhotoIcon,
      },
      {
        component: "NavIcon",
        props: MusicIcon,
      },
      {
        component: "NavIcon",
        props: FilmIcon,
      },
    ],
  },
  {
    text: "👏文章索引",
    items: [
      {
        text: "本站",
        items: [
          { text: "文章分类", link: "/categories/" },
          { text: "文章标签", link: "/tags/" },
          { text: "文章归档", link: "/archives/" },
          { text: "文章清单", link: "/articleOverview/" },
        ],
      },
    ],
  },
  {
    text: "🥰网站分享",
    link: '/nav'
  }
];
