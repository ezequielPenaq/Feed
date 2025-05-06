import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ezequielPenaq.png',
      name: 'Ezequiel Penaquioni',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é LearnReact 🚀',
      },
      { type: 'link', content: '👉 jane.design/LearnReact' },
    ],
    publishedAt: new Date('2025-04-29T14:11:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GabiAnaa.png',
      name: 'Ana Gabriela',
      role: 'Advogada',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portfólio. Sobre leis trabalhistas para qualquer um que queira aprender mais sobre esse mundo',
      },
      { type: 'link', content: '👉 jane.design/LeisTrabalhistas' },
    ],
    publishedAt: new Date('2025-04-23T23:11:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        {posts.map(post => {
  return (
    <Post
      key={post.id}
      author={post.author}
      content={post.content}
      publishedAt={post.publishedAt}
    />
  );
})}
        </main>
      </div>
    </div>
  );
}


